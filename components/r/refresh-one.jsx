import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/i7iloobad.css';
import '../../css/r/r-mrtlb8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect transform="rotate(-45 17 24.071)" class="i7iloobad"/><path class="r-mrtlb8m"/></g>`,
		"fallback": "icon-park-solid:refresh-one",
	});
}

export default Component;
