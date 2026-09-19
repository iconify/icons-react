import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jzwzpccov.css';
import '../../css/m/mza0vib7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jzwzpccov"/><path class="mza0vib7z"/></g>`,
		"fallback": "icon-park:stickers",
	});
}

export default Component;
