import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miccwacuq.css';
import '../../css/z/z0q4lw36b.css';
import '../../css/f/f8wc0fbln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miccwacuq"/><path class="z0q4lw36b"/><path class="f8wc0fbln"/>`,
		"fallback": "energy-icons:van-20",
	});
}

export default Component;
