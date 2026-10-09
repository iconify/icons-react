import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7xqk_um.css';
import '../../css/h/hs5ndsbxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7xqk_um"/><path class="hs5ndsbxa"/>`,
		"fallback": "energy-icons:kanban-48-bold",
	});
}

export default Component;
