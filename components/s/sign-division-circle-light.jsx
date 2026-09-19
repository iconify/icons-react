import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zxjbngbxy.css';
import '../../css/g/g8m3171mh.css';
import '../../css/l/l9ewbkbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="zxjbngbxy"/><path class="g8m3171mh"/><path class="l9ewbkbml"/></g>`,
		"fallback": "iconamoon:sign-division-circle-light",
	});
}

export default Component;
