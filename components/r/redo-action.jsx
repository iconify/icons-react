import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mnu8o9n6o.css';
import '../../css/n/nhp4w7b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mnu8o9n6o"/><path class="nhp4w7b6f"/></g>`,
		"fallback": "iconoir:redo-action",
	});
}

export default Component;
