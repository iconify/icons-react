import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hsng9xv1q.css';
import '../../css/n/njp9zubrh.css';
import '../../css/a/ayom60qyd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hsng9xv1q"/><path class="njp9zubrh"/><path class="ayom60qyd"/></g>`,
		"fallback": "streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment",
	});
}

export default Component;
