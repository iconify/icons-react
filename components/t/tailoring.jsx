import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/i/imjgmcbia.css';
import '../../css/w/w0cwj3s9y.css';
import '../../css/m/mr4uahbya.css';
import '../../css/q/quv7axtmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="imjgmcbia"/><path class="w0cwj3s9y"/><path class="mr4uahbya"/><path class="quv7axtmz"/></g>`,
		"fallback": "icon-park:tailoring",
	});
}

export default Component;
