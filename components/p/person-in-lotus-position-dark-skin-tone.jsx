import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raf5bng.css';
import '../../css/h/hz1zk_bsj.css';
import '../../css/a/awpu8mb-l.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/n/n5bhdb4ld.css';
import '../../css/m/mzz-ioa3t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e_raf5bng"><circle class="hz1zk_bsj"/><path class="awpu8mb-l"/></g><g class="x8poo_bjf"><circle class="hz1zk_bsj"/><path class="n5bhdb4ld"/><path class="mzz-ioa3t"/></g>`,
		"fallback": "openmoji:person-in-lotus-position-dark-skin-tone",
	});
}

export default Component;
