import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyt5i2b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyt5i2b6h"/>`,
		"fallback": "ri:upload-cloud-line",
	});
}

export default Component;
