import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u20py2moy.css';
import '../../css/h/hi068jb0r.css';
import '../../css/u/uajmqugut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u20py2moy"/><path class="hi068jb0r"/><path class="uajmqugut"/>`,
		"fallback": "energy-icons:move-20-bold",
	});
}

export default Component;
