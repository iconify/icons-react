import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eb3ht5b1i.css';
import '../../css/o/odmysdbng.css';
import '../../css/i/icwh4nd8c.css';
import '../../css/f/ft08jjbst.css';
import '../../css/c/cjsh9qbru.css';
import '../../css/a/a4x545bfx.css';
import '../../css/b/b-33imbfd.css';
import '../../css/h/hdzjb-b4p.css';
import '../../css/u/uwbj216xp.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="eb3ht5b1i"/><path class="odmysdbng"/><path class="icwh4nd8c"/><path class="ft08jjbst"/><path class="cjsh9qbru"/><path class="a4x545bfx"/><path class="b-33imbfd"/><path class="hdzjb-b4p"/><path class="uwbj216xp"/></g>`,
		"fallback": "cif:tj",
	});
}

export default Component;
