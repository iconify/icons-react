import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx3jtcboz.css';
import '../../css/l/lu7xmg9vk.css';
import '../../css/w/wd2zr02fe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx3jtcboz"/><path class="lu7xmg9vk"/><circle class="wd2zr02fe"/>`,
		"fallback": "fxemoji:sunflower",
	});
}

export default Component;
