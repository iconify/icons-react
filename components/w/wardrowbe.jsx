import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8iugqbno.css';
import '../../css/l/lg5c8jbrj.css';
import '../../css/q/qzwbahb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8iugqbno"/><path class="lg5c8jbrj"/><path class="qzwbahb4k"/>`,
		"fallback": "selfhst:wardrowbe",
	});
}

export default Component;
