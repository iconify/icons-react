import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwztv3bbz.css';
import '../../css/p/plfffuboi.css';
import '../../css/e/eoluvabsq.css';
import '../../css/j/js9v11e_w.css';
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
		"content": `<rect class="iwztv3bbz"/><path clip-rule="evenodd" class="plfffuboi"/><path clip-rule="evenodd" class="eoluvabsq"/><path clip-rule="evenodd" class="js9v11e_w"/><path class="tbs1_0bvp"/><path class="dpg9ebcnb"/><path class="unmznsbqu"/>`,
		"fallback": "openmoji:jar-with-green-content",
	});
}

export default Component;
