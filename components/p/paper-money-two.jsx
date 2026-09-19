import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qu_rscbry.css';
import '../../css/z/znnkp9s9t.css';
import '../../css/r/rpzcj-zor.css';
import '../../css/b/btgxycb8m.css';
import '../../css/j/jgs__5b5g.css';
import '../../css/y/ylgt-eb-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="qu_rscbry"/><path clip-rule="evenodd" class="znnkp9s9t"/><path clip-rule="evenodd" class="rpzcj-zor"/><path clip-rule="evenodd" class="btgxycb8m"/><path clip-rule="evenodd" class="jgs__5b5g"/><path class="ylgt-eb-r"/></g>`,
		"fallback": "icon-park:paper-money-two",
	});
}

export default Component;
