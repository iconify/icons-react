import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/haxsskyum.css';
import '../../css/x/xtoy_g85y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="haxsskyum"/><path class="xtoy_g85y"/></g>`,
		"fallback": "streamline-plump-color:share-link-flat",
	});
}

export default Component;
