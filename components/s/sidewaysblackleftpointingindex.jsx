import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmq46fbhw.css';
import '../../css/x/xiovtcd0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmq46fbhw"/><path class="xiovtcd0b"/>`,
		"fallback": "fxemoji:sidewaysblackleftpointingindex",
	});
}

export default Component;
