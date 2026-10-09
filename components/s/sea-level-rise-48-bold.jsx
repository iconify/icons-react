import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uayr9jbjw.css';
import '../../css/e/ebana2mce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uayr9jbjw"/><path class="ebana2mce"/>`,
		"fallback": "energy-icons:sea-level-rise-48-bold",
	});
}

export default Component;
