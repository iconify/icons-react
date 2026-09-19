import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8kal4bpt.css';
import '../../css/f/fjj4-gb_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m8kal4bpt"/><path class="fjj4-gb_f"/></g>`,
		"fallback": "icon-park-outline:road-cone",
	});
}

export default Component;
