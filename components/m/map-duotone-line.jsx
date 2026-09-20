import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ih9e1vb8h.css';
import '../../css/x/xg3h85bnw.css';
import '../../css/x/xbh224b0r.css';
import '../../css/e/edss2cc6j.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdf7dacXC"><g class="ft5dv1b6b"><path class="ih9e1vb8h"/><path class="xg3h85bnw"/><path class="xbh224b0r"/><circle class="edss2cc6j"/></g></mask></defs><path mask="url(#SVGdf7dacXC)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:map-duotone-line",
	});
}

export default Component;
