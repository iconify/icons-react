import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwztv3bbz.css';
import '../../css/p/plfffuboi.css';
import '../../css/h/hgzwgt-qb.css';
import '../../css/e/ek58n4bjy.css';
import '../../css/t/tbs1_0bvp.css';
import '../../css/d/dpg9ebcnb.css';
import '../../css/u/unmznsbqu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="iwztv3bbz"/><path clip-rule="evenodd" class="plfffuboi"/><path clip-rule="evenodd" class="hgzwgt-qb"/><path clip-rule="evenodd" class="ek58n4bjy"/><path class="tbs1_0bvp"/><path class="dpg9ebcnb"/><path class="unmznsbqu"/>`,
		"fallback": "openmoji:jar-with-orange-content",
	});
}

export default Component;
