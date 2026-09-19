import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/b/bzf9gu18d.css';
import '../../css/q/q_lp42tom.css';
import '../../css/g/gbyxz8bjc.css';
import '../../css/b/bub5_hplj.css';
import '../../css/z/zaf4hyqkv.css';
import '../../css/i/iyhffabtm.css';
import '../../css/x/xbxqm3onb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="bzf9gu18d"/><path class="q_lp42tom"/><path class="gbyxz8bjc"/><path class="bub5_hplj"/><path class="zaf4hyqkv"/><path class="iyhffabtm"/><path class="xbxqm3onb"/></g>`,
		"fallback": "icon-park:termination-file",
	});
}

export default Component;
