import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbc_8fbal.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbc_8fbal"/>`,
		"fallback": "roentgen:t",
	});
}

export default Component;
