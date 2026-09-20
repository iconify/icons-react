import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c-fn48bus.css';
import '../../css/a/a-22vyg5o.css';
import '../../css/x/xe6tfdcfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c-fn48bus"/><path class="a-22vyg5o"/><path clip-rule="evenodd" class="xe6tfdcfq"/></g>`,
		"fallback": "keyline-icons:sticky-notes-sharp-duotone",
	});
}

export default Component;
