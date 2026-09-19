import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/e/e6r6jas_r.css';
import '../../css/o/oz326tbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/><path class="e6r6jas_r"/><path class="oz326tbfx"/></g>`,
		"fallback": "hugeicons:truck",
	});
}

export default Component;
