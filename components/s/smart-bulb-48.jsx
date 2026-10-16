import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs-cefb8p.css';
import '../../css/d/dtun6abyq.css';
import '../../css/b/b5u-9mb6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs-cefb8p"/><path class="dtun6abyq"/><path class="b5u-9mb6w"/>`,
		"fallback": "energy-icons:smart-bulb-48",
	});
}

export default Component;
