import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpj65fbae.css';
import '../../css/l/lb80qlbob.css';
import '../../css/u/usozxnbrm.css';
import '../../css/a/aqqd_9baf.css';
import '../../css/f/f0ydaq_8s.css';
import '../../css/m/mi2sqytmp.css';
import '../../css/a/aj4q3ybmf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hpj65fbae"/><g class="lb80qlbob"><circle class="usozxnbrm"/><path class="aqqd_9baf"/><path class="f0ydaq_8s"/><path class="mi2sqytmp"/><path class="aj4q3ybmf"/></g>`,
		"fallback": "openmoji:rounded-symbol-for-cai",
	});
}

export default Component;
