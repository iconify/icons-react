import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb-fc8bpf.css';
import '../../css/s/s1m9_0bjz.css';
import '../../css/m/mgk2zwu0h.css';
import '../../css/t/tta6kkblt.css';
import '../../css/y/yejd8jbuo.css';
import '../../css/y/yun89fbhz.css';
import '../../css/d/da8u-nbqa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb-fc8bpf"/><path class="s1m9_0bjz"/><path class="mgk2zwu0h"/><path class="tta6kkblt"/><path class="yejd8jbuo"/><path class="yun89fbhz"/><path class="da8u-nbqa"/>`,
		"fallback": "openmoji:man-in-steamy-room-light-skin-tone",
	});
}

export default Component;
