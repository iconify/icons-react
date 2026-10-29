import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dab644bei.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/z/zn-73g1qe.css';
import '../../css/h/hkcj5-bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dab644bei wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="wm-k zn-73g1qe"/><path class="hkcj5-bst wm-a"/></g>`,
		"fallback": "withicons:smartphone-blueprint",
	});
}

export default Component;
