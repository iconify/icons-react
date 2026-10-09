import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coivkzecr.css';
import '../../css/p/p8-ltwbll.css';
import '../../css/y/yzgpzhz2h.css';
import '../../css/e/en2-8kltz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coivkzecr"/><path class="p8-ltwbll"/><path class="yzgpzhz2h"/><path class="en2-8kltz"/>`,
		"fallback": "energy-icons:ventilation-20-bold",
	});
}

export default Component;
