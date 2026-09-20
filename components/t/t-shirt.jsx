import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9d3uccox.css';
import '../../css/p/puhvhwbqm.css';
import '../../css/b/b7mizhbcw.css';
import '../../css/t/taik3bt6h.css';
import '../../css/s/s8btyqw_a.css';
import '../../css/k/k_3ddbc7t.css';
import '../../css/c/c-80w6bzc.css';
import '../../css/d/dh7dspsmr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9d3uccox"/><path class="puhvhwbqm"/><path class="b7mizhbcw"/><path class="taik3bt6h"/><path class="s8btyqw_a"/><circle class="k_3ddbc7t"/><circle class="c-80w6bzc"/><circle class="dh7dspsmr"/>`,
		"fallback": "openmoji:t-shirt",
	});
}

export default Component;
