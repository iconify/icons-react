import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlf63wklu.css';
import '../../css/c/clfrelb4k.css';
import '../../css/h/hs6jekbhg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlf63wklu"/><path class="clfrelb4k"/><path class="hs6jekbhg"/>`,
		"fallback": "energy-icons:refresh-cw-20",
	});
}

export default Component;
