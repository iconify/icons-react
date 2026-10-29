import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia5b6gb-y.css';
import '../../css/c/c_c90_bce.css';
import '../../css/g/glzx3xbim.css';
import '../../css/n/nvoe05bmd.css';
import '../../css/x/xweqt1mrp.css';
import '../../css/a/aom-vwbtc.css';
import '../../css/h/h8ejzmbrg.css';
import '../../css/h/h13bfn9vx.css';
import '../../css/l/l4xmri_8b.css';
import '../../css/k/ki_vk7b0f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia5b6gb-y"/><path class="c_c90_bce"/><path class="glzx3xbim"/><path class="nvoe05bmd"/><path class="xweqt1mrp"/><path class="aom-vwbtc"/><path class="h8ejzmbrg"/><path class="h13bfn9vx"/><path class="l4xmri_8b"/><path class="ki_vk7b0f"/>`,
		"fallback": "devicon:postgis-wordmark",
	});
}

export default Component;
