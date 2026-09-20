import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwztv3bbz.css';
import '../../css/p/plfffuboi.css';
import '../../css/d/dpg9ebcnb.css';
import '../../css/m/mvc8advts.css';
import '../../css/y/y_-zm9bfq.css';
import '../../css/t/tbs1_0bvp.css';
import '../../css/u/unmznsbqu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="iwztv3bbz"/><path clip-rule="evenodd" class="plfffuboi"/><path class="dpg9ebcnb"/><path clip-rule="evenodd" class="mvc8advts"/><path clip-rule="evenodd" class="y_-zm9bfq"/><path class="tbs1_0bvp"/><path class="unmznsbqu"/>`,
		"fallback": "openmoji:jar-with-brown-content",
	});
}

export default Component;
