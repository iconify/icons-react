import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a44nu1b1v.css';
import '../../css/p/pdt_z-fvk.css';
import '../../css/f/fx90jorko.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a44nu1b1v"/><path class="pdt_z-fvk"/><path class="fx90jorko"/>`,
		"fallback": "gis:photogrammetry",
	});
}

export default Component;
