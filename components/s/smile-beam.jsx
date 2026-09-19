import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um290acwp.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um290acwp"/>`,
		"fallback": "fa-regular:smile-beam",
	});
}

export default Component;
