import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/r/rrthikbum.css';
import '../../css/w/wmp9ivcdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="rrthikbum"/><path class="wmp9ivcdk"/></g>`,
		"fallback": "streamline-kameleon-color:magic-wand-duo",
	});
}

export default Component;
