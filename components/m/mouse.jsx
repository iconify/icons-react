import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/k/kynuj-ben.css';
import '../../css/n/n9g49ib_l.css';
import '../../css/r/rnbu82bmn.css';
import '../../css/j/jlkqukbjj.css';
import '../../css/o/oxd-hebhe.css';
import '../../css/i/iz8l7z7di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="kynuj-ben wm-shadow"/><path class="n9g49ib_l"/><path class="rnbu82bmn"/><path class="jlkqukbjj"/><path class="oxd-hebhe"/><path class="iz8l7z7di"/></g>`,
		"fallback": "withicons-brutal:mouse",
	});
}

export default Component;
