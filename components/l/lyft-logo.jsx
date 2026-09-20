import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rm8ex07il.css';
import '../../css/n/nif612bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rm8ex07il"/><path class="nif612bvj"/></g>`,
		"fallback": "streamline-logos:lyft-logo",
	});
}

export default Component;
