import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fh6qnzbmt.css';
import '../../css/s/sjowjbelj.css';
import '../../css/k/kyor_abte.css';
import '../../css/v/v-v48ubxx.css';
import '../../css/i/iw7g_6bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fh6qnzbmt"/><path class="sjowjbelj"/><path class="kyor_abte"/><path class="v-v48ubxx"/><path class="iw7g_6bnz"/></g>`,
		"fallback": "hugeicons:kaaba-01",
	});
}

export default Component;
