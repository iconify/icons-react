import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpj65fbae.css';
import '../../css/l/lb80qlbob.css';
import '../../css/u/usozxnbrm.css';
import '../../css/l/lcckzaciq.css';
import '../../css/j/jmquyybnl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hpj65fbae"/><g class="lb80qlbob"><circle class="usozxnbrm"/><path class="lcckzaciq"/><path class="jmquyybnl"/></g>`,
		"fallback": "openmoji:rounded-symbol-for-xi",
	});
}

export default Component;
