import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/baciku7_x.css';
import '../../css/j/jxz50xbgf.css';
import '../../css/n/n6vmcbbro.css';
import '../../css/l/ljy83tbko.css';
import '../../css/t/tq7kvx37d.css';
import '../../css/g/g4uzw-b-k.css';
import '../../css/c/c-qa2bcch.css';
import '../../css/n/n2pg5aclz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="baciku7_x"/><path class="jxz50xbgf"/><path class="n6vmcbbro"/><path class="ljy83tbko"/><path class="tq7kvx37d"/><path class="g4uzw-b-k"/><path class="c-qa2bcch"/><path class="n2pg5aclz"/></g>`,
		"fallback": "solar:washing-machine-linear",
	});
}

export default Component;
