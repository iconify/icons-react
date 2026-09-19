import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r054o8ykj.css';
import '../../css/u/uyyst-lhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="r054o8ykj"/><path class="uyyst-lhv"/></g>`,
		"fallback": "iconamoon:sign-division-thin",
	});
}

export default Component;
