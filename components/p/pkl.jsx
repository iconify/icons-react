import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwjj5yv8t.css';
import '../../css/a/aj-0tlawi.css';
import '../../css/g/guah0xbpd.css';
import '../../css/g/gln5lwbrw.css';
import '../../css/i/it4ayvb3w.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwjj5yv8t"/><circle class="aj-0tlawi"/><g class="guah0xbpd"><path class="gln5lwbrw"/><path class="it4ayvb3w"/></g>`,
		"fallback": "material-icon-theme:pkl",
	});
}

export default Component;
