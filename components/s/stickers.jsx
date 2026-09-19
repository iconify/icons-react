import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h-o4uqb6g.css';
import '../../css/m/mza0vib7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h-o4uqb6g"/><path class="mza0vib7z"/></g>`,
		"fallback": "icon-park-solid:stickers",
	});
}

export default Component;
