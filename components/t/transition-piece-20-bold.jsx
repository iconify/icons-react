import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poxn7fb3x.css';
import '../../css/h/h4vfp4baj.css';
import '../../css/p/p6isisbfn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poxn7fb3x"/><path class="h4vfp4baj"/><path class="p6isisbfn"/>`,
		"fallback": "energy-icons:transition-piece-20-bold",
	});
}

export default Component;
