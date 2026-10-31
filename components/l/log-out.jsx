import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lz6a9e_ad.css';
import '../../css/u/u8tn72rpy.css';
import '../../css/u/uen_72mqb.css';
import '../../css/p/pon64bbuo.css';
import '../../css/h/h0wv2tbxa.css';
import '../../css/z/z2crf9b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lz6a9e_ad wm-shadow"/><path class="u8tn72rpy"/><path class="uen_72mqb"/><path class="pon64bbuo"/><path class="h0wv2tbxa"/><path class="z2crf9b4t"/></g>`,
		"fallback": "withicons-retro:log-out",
	});
}

export default Component;
