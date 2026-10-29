import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1y6-0bek.css';
import '../../css/h/hxed4sqyb.css';
import '../../css/u/uvtxo0yrw.css';
import '../../css/l/lzc9gt9ac.css';
import '../../css/n/nougfnqgi.css';
import '../../css/i/izuz691yq.css';
import '../../css/n/niw4efwro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1y6-0bek wm-shadow"/><path class="hxed4sqyb wm-k"/><path class="uvtxo0yrw wm-k"/><path class="lzc9gt9ac wm-k"/><path class="nougfnqgi wm-k"/><path class="izuz691yq wm-k"/><path class="niw4efwro wm-shine"/>`,
		"fallback": "withicons-pastel:music-note",
	});
}

export default Component;
