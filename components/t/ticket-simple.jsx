import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe_pmzwam.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe_pmzwam"/>`,
		"fallback": "fa7-solid:ticket-simple",
	});
}

export default Component;
