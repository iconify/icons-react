import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhbboj22q.css';
import '../../css/a/a8ccsebhs.css';
import '../../css/m/mivqt5bxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhbboj22q"/><path class="a8ccsebhs"/><path class="mivqt5bxo"/>`,
		"fallback": "energy-icons:lamp-20-bold",
	});
}

export default Component;
