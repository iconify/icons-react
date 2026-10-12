import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5g4gdxon.css';
import '../../css/c/c-2y_lb8w.css';
import '../../css/f/fpx2kva1t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5g4gdxon"/><path class="c-2y_lb8w"/><path class="fpx2kva1t"/>`,
		"fallback": "energy-icons:plumb-bob-20",
	});
}

export default Component;
