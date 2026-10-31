import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/m/mj2xf6dia.css';
import '../../css/a/a8wev5bjh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="mj2xf6dia"/><path class="a8wev5bjh"/></g>`,
		"fallback": "streamline-kameleon-color:text-file-pop",
	});
}

export default Component;
