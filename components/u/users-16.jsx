import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jidooobyy.css';
import '../../css/v/vrp19nbdv.css';
import '../../css/x/x7y2qgblu.css';
import '../../css/f/fctv43p_k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jidooobyy"/><path class="vrp19nbdv"/><path clip-rule="evenodd" class="x7y2qgblu"/><path class="fctv43p_k"/>`,
		"fallback": "qlementine-icons:users-16",
	});
}

export default Component;
