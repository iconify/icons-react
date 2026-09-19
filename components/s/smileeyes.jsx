import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsd7b4a3r.css';
import '../../css/m/m6rsfj-rl.css';
import '../../css/a/a065enb7i.css';
import '../../css/r/ru0xozsfr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsd7b4a3r"/><path class="m6rsfj-rl"/><path class="a065enb7i"/><path class="ru0xozsfr"/>`,
		"fallback": "fxemoji:smileeyes",
	});
}

export default Component;
