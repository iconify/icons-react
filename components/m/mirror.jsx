import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it2ikgbwq.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eerv4xbeo.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGcz36tc4C" class="it2ikgbwq"/></defs><g class="ft5dv1b6b"><use href="#SVGcz36tc4C"/><path class="eerv4xbeo"/><use href="#SVGcz36tc4C" class="p_3zmsvya"/></g>`,
		"fallback": "tdesign:mirror",
	});
}

export default Component;
