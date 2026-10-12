import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atrt3foew.css';
import '../../css/b/buekbtbtt.css';
import '../../css/n/nqrv9soyo.css';
import '../../css/f/f3h68lbpw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atrt3foew"/><path class="buekbtbtt"/><path class="nqrv9soyo"/><path class="f3h68lbpw"/>`,
		"fallback": "energy-icons:roundabout-20-bold",
	});
}

export default Component;
