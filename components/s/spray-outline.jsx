import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9rkou0mf.css';
import '../../css/m/m_ogqzi-d.css';
import '../../css/v/vjc3f2jdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s9rkou0mf"/><path class="m_ogqzi-d"/><path clip-rule="evenodd" class="vjc3f2jdt"/></g>`,
		"fallback": "healthicons:spray-outline",
	});
}

export default Component;
