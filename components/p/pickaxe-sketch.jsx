import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z_pfq4bwn.css';
import '../../css/k/krxz-acfd.css';
import '../../css/z/zs3_58bis.css';
import '../../css/e/e9z8zubjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="z_pfq4bwn"/><path class="krxz-acfd wm-k"/><path class="wm-k zs3_58bis"/><path class="e9z8zubjt wm-a"/></g>`,
		"fallback": "withicons:pickaxe-sketch",
	});
}

export default Component;
