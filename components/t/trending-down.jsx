import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aozly20xf.css';
import '../../css/i/iikmdob_i.css';
import '../../css/u/une91ij6o.css';
import '../../css/n/nbag8d71d.css';
import '../../css/z/zer8ib_bm.css';
import '../../css/q/qvmixkwgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aozly20xf wm-shadow"/><path class="iikmdob_i wm-k"/><path class="une91ij6o wm-k"/><path class="nbag8d71d wm-k"/><path class="wm-k zer8ib_bm"/><path class="qvmixkwgv wm-shine"/>`,
		"fallback": "withicons-pastel:trending-down",
	});
}

export default Component;
