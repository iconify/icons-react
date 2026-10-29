import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co38emb0x.css';
import '../../css/x/xc8x46g2k.css';
import '../../css/f/fhq028bdl.css';
import '../../css/m/mt96qk9rm.css';
import '../../css/d/d9pibpb8a.css';
import '../../css/k/k_myx_bss.css';
import '../../css/u/u4k2a0b2s.css';
import '../../css/w/wdul2ybeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co38emb0x wm-shadow"/><path class="xc8x46g2k"/><path class="fhq028bdl"/><path class="mt96qk9rm"/><path class="d9pibpb8a"/><path class="k_myx_bss wm-shine"/><path class="u4k2a0b2s"/><path class="wdul2ybeo"/>`,
		"fallback": "withicons-plush:navigation",
	});
}

export default Component;
