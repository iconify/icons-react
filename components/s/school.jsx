import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6duhzbtn.css';
import '../../css/t/tmcnx0bgf.css';
import '../../css/j/jmp2ofbsg.css';
import '../../css/b/by48vwbxo.css';
import '../../css/m/mzqhsqb9l.css';
import '../../css/n/n5-7uibog.css';
import '../../css/c/cco9hubfk.css';
import '../../css/g/gpbcp1elw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6duhzbtn"/><path class="tmcnx0bgf"/><path class="jmp2ofbsg"/><path class="by48vwbxo"/><path class="mzqhsqb9l"/><circle class="n5-7uibog"/><circle class="cco9hubfk"/><path class="gpbcp1elw"/>`,
		"fallback": "fxemoji:school",
	});
}

export default Component;
