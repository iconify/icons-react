import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zwuy_7brd.css';
import '../../css/p/pa9qlj9ki.css';
import '../../css/v/v69mdge2a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zwuy_7brd"/><path class="pa9qlj9ki"/><path class="v69mdge2a"/></g>`,
		"fallback": "streamline:popcorn",
	});
}

export default Component;
