import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv842m9yr.css';
import '../../css/f/fl7bzqbcv.css';
import '../../css/n/nhkqt2bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv842m9yr"/><path class="fl7bzqbcv"/><path class="nhkqt2bck"/>`,
		"fallback": "energy-icons:library-20-bold",
	});
}

export default Component;
