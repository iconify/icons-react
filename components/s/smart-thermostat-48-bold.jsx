import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/p/ppaig9b9i.css';
import '../../css/a/acpimzbdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="ppaig9b9i"/><path class="acpimzbdx"/>`,
		"fallback": "energy-icons:smart-thermostat-48-bold",
	});
}

export default Component;
