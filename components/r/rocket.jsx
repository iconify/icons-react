import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdyn37bfp.css';
import '../../css/m/mtf2lkb-d.css';
import '../../css/n/n8_y97bnk.css';
import '../../css/p/pkayin37c.css';
import '../../css/t/t5prinbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdyn37bfp wm-a"/><path class="mtf2lkb-d wm-k"/><path class="n8_y97bnk wm-k"/><path class="pkayin37c wm-k"/><path class="t5prinbbz wm-a"/>`,
		"fallback": "withicons-bauhaus:rocket",
	});
}

export default Component;
