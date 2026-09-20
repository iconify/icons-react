import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb_86va7r.css';
import '../../css/y/y4vdeybcw.css';
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
		"content": `<path class="yb_86va7r"/><path class="y4vdeybcw"/><path class="mgk2zwu0h"/><path class="tta6kkblt"/><path class="yejd8jbuo"/><path class="yun89fbhz"/><path class="da8u-nbqa"/>`,
		"fallback": "openmoji:man-in-steamy-room-medium-skin-tone",
	});
}

export default Component;
