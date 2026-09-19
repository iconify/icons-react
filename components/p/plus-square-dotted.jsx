import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg26jqbpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg26jqbpn"/>`,
		"fallback": "bi:plus-square-dotted",
	});
}

export default Component;
