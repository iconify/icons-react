import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwztv3bbz.css';
import '../../css/p/plfffuboi.css';
import '../../css/q/qolr4g9me.css';
import '../../css/v/vc88c78ap.css';
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
		"content": `<rect class="iwztv3bbz"/><path clip-rule="evenodd" class="plfffuboi"/><path clip-rule="evenodd" class="qolr4g9me"/><path clip-rule="evenodd" class="vc88c78ap"/><path class="tbs1_0bvp"/><path class="dpg9ebcnb"/><path class="unmznsbqu"/>`,
		"fallback": "openmoji:jar-with-purple-content",
	});
}

export default Component;
