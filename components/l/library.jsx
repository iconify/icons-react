import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl933tb7k.css';
import '../../css/s/s-5hvuboc.css';
import '../../css/k/k68b7sadh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl933tb7k"/><path class="s-5hvuboc"/><path class="k68b7sadh"/>`,
		"fallback": "cil:library",
	});
}

export default Component;
