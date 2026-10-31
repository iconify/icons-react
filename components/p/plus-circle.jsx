import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/u/u5hstz1mw.css';
import '../../css/p/p6nwknb9q.css';
import '../../css/b/b4nbkyb1n.css';
import '../../css/o/oh---cbyh.css';
import '../../css/t/t1dxlobjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="u5hstz1mw"/><path class="p6nwknb9q"/><path class="b4nbkyb1n"/><path class="oh---cbyh"/><path class="t1dxlobjp"/></g>`,
		"fallback": "withicons-retro:plus-circle",
	});
}

export default Component;
