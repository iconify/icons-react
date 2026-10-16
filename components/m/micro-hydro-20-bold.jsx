import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvpjufbao.css';
import '../../css/f/fybrpkbhk.css';
import '../../css/l/l-srprb8h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvpjufbao"/><path class="fybrpkbhk"/><path class="l-srprb8h"/>`,
		"fallback": "energy-icons:micro-hydro-20-bold",
	});
}

export default Component;
