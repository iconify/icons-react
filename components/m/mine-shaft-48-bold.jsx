import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt37rybne.css';
import '../../css/t/tpzkgwbum.css';
import '../../css/v/vargdwkro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt37rybne"/><path class="tpzkgwbum"/><path class="vargdwkro"/>`,
		"fallback": "energy-icons:mine-shaft-48-bold",
	});
}

export default Component;
