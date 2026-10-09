import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxx9g-boz.css';
import '../../css/e/elto8jbuv.css';
import '../../css/d/dysie4bua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxx9g-boz"/><path class="elto8jbuv"/><path class="dysie4bua"/>`,
		"fallback": "energy-icons:vector-pen-20",
	});
}

export default Component;
