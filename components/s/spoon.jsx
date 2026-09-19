import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mnh5f9zfq.css';
import '../../css/o/ocruyxbsi.css';
import '../../css/h/hpyym12cz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="mnh5f9zfq"/><path class="ocruyxbsi"/><rect class="hpyym12cz"/></g>`,
		"fallback": "icon-park-outline:spoon",
	});
}

export default Component;
