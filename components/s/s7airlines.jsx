import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itz8c4-rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itz8c4-rb"/>`,
		"fallback": "simple-icons:s7airlines",
	});
}

export default Component;
