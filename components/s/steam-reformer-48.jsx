import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asop52brs.css';
import '../../css/p/pio8nkbyn.css';
import '../../css/h/hiktgyb7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asop52brs"/><path class="pio8nkbyn"/><path class="hiktgyb7l"/>`,
		"fallback": "energy-icons:steam-reformer-48",
	});
}

export default Component;
