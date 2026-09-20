import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flrepsbkq.css';
import '../../css/g/gucia9bih.css';
import '../../css/c/c60jr1bxo.css';
import '../../css/m/mpss-tb8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flrepsbkq"/><path class="gucia9bih"/><path class="c60jr1bxo"/><path class="mpss-tb8s"/>`,
		"fallback": "openmoji:plunger",
	});
}

export default Component;
