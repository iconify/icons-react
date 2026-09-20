import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4ca_8blj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4ca_8blj"/>`,
		"fallback": "oui:token-boolean",
	});
}

export default Component;
