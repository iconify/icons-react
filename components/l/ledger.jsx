import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtc0sibbu.css';
import '../../css/a/a05zqoswp.css';
import '../../css/i/indds1b1z.css';
import '../../css/v/v4-oeibyk.css';
import '../../css/z/zv_0hpbfs.css';
import '../../css/t/t92mmzq6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtc0sibbu"/><path class="a05zqoswp"/><path class="indds1b1z"/><path class="v4-oeibyk"/><path class="zv_0hpbfs"/><path class="t92mmzq6l"/>`,
		"fallback": "fxemoji:ledger",
	});
}

export default Component;
