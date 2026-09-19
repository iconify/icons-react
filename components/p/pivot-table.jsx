import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bnpt7bcpa.css';
import '../../css/l/lg_3hrbjz.css';
import '../../css/h/hbtezcj3h.css';
import '../../css/q/qvzqv0bxn.css';
import '../../css/e/eg7jz2bwt.css';
import '../../css/o/o32m7o_mq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bnpt7bcpa"/><path class="lg_3hrbjz"/><path class="hbtezcj3h"/><path class="qvzqv0bxn"/><path class="eg7jz2bwt"/><path class="o32m7o_mq"/></g>`,
		"fallback": "icon-park-outline:pivot-table",
	});
}

export default Component;
