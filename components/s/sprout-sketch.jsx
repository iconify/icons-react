import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jwebfwysk.css';
import '../../css/a/a51zlh9nm.css';
import '../../css/b/bbm6b67wr.css';
import '../../css/i/ih9g-eb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jwebfwysk wm-k"/><path class="a51zlh9nm wm-a"/><path class="bbm6b67wr wm-k"/><path class="ih9g-eb6y wm-a"/></g>`,
		"fallback": "withicons:sprout-sketch",
	});
}

export default Component;
