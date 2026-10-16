import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4r0n-daa.css';
import '../../css/d/dzy_-taoh.css';
import '../../css/k/ktd6x_fpp.css';
import '../../css/x/x-e56pbdi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4r0n-daa"/><path class="dzy_-taoh"/><path class="ktd6x_fpp"/><path class="x-e56pbdi"/>`,
		"fallback": "energy-icons:mosque-20-bold",
	});
}

export default Component;
