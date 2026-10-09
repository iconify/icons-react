import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq-4s2b4h.css';
import '../../css/k/ko8go1bco.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq-4s2b4h"/><path class="ko8go1bco"/>`,
		"fallback": "energy-icons:pickaxe-20",
	});
}

export default Component;
