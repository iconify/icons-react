import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee45ycbzu.css';
import '../../css/t/t0j7g2fur.css';
import '../../css/i/iqg45ybon.css';
import '../../css/t/ttm2n_87g.css';
import '../../css/c/cvyeblbsz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ee45ycbzu"/><path class="t0j7g2fur"/><path class="iqg45ybon"/><path class="ttm2n_87g"/><path clip-rule="evenodd" class="cvyeblbsz"/></g>`,
		"fallback": "fluent-emoji-flat:milky-way",
	});
}

export default Component;
