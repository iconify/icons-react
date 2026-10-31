import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fo1n74ldf.css';
import '../../css/r/rcsb49bqm.css';
import '../../css/v/vnu853bvd.css';
import '../../css/k/k7b40_bso.css';
import '../../css/v/vgg3x2bdg.css';
import '../../css/f/fbymnv3-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fo1n74ldf wm-shadow"/><path class="rcsb49bqm"/><path class="vnu853bvd"/><path class="k7b40_bso"/><path class="vgg3x2bdg"/><path class="fbymnv3-u"/></g>`,
		"fallback": "withicons-retro:rocket",
	});
}

export default Component;
