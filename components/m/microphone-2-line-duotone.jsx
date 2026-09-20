import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/l/lzycjh8tw.css';
import '../../css/h/hk--7ruxp.css';
import '../../css/z/z-o_wrbiv.css';
import '../../css/y/yzl8izb_o.css';
import '../../css/n/nh-kspbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="lzycjh8tw"/><path class="hk--7ruxp"/><path class="z-o_wrbiv"/><path class="yzl8izb_o"/><path class="nh-kspbph"/></g>`,
		"fallback": "solar:microphone-2-line-duotone",
	});
}

export default Component;
