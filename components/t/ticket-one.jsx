import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/la9q92bit.css';
import '../../css/g/gitl-abod.css';
import '../../css/e/e1cwyl8kl.css';
import '../../css/l/lpzby4b8w.css';
import '../../css/x/x_gychh4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="la9q92bit"/><path class="gitl-abod"/><path class="e1cwyl8kl"/><path class="lpzby4b8w"/><path class="x_gychh4s"/></g>`,
		"fallback": "icon-park:ticket-one",
	});
}

export default Component;
