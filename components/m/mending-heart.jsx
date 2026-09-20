import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z60_t-bxa.css';
import '../../css/x/xlzgy4bzl.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/t597itgcw.css';
import '../../css/s/spner8b1a.css';
import '../../css/v/vq_vr4t7x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z60_t-bxa"/><path class="xlzgy4bzl"/><g class="rpvb-o6bq"><path class="t597itgcw"/><path class="spner8b1a"/><path class="vq_vr4t7x"/></g>`,
		"fallback": "openmoji:mending-heart",
	});
}

export default Component;
