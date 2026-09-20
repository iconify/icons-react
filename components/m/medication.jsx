import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krtk5sbwi.css';
import '../../css/v/v3t2okbsb.css';
import '../../css/j/j54-d_09m.css';
import '../../css/g/ggglnib_b.css';
import '../../css/u/u0hxj2bga.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krtk5sbwi"/><path class="v3t2okbsb"/><path class="j54-d_09m"/><path class="ggglnib_b"/><path class="u0hxj2bga"/>`,
		"fallback": "openmoji:medication",
	});
}

export default Component;
