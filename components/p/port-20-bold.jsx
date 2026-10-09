import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poefxtbls.css';
import '../../css/a/alj1n3b0b.css';
import '../../css/z/zvh232b5d.css';
import '../../css/s/s9k_2uvrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poefxtbls"/><path class="alj1n3b0b"/><path class="zvh232b5d"/><path class="s9k_2uvrd"/>`,
		"fallback": "energy-icons:port-20-bold",
	});
}

export default Component;
