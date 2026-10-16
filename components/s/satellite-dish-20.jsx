import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqpblyxmw.css';
import '../../css/g/g49fs7bzv.css';
import '../../css/u/u-hmmubte.css';
import '../../css/m/mkzjpdbji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqpblyxmw"/><path class="g49fs7bzv"/><path class="u-hmmubte"/><path class="mkzjpdbji"/>`,
		"fallback": "energy-icons:satellite-dish-20",
	});
}

export default Component;
