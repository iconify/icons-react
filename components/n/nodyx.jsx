import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec7pwm9zi.css';
import '../../css/f/fzunxilou.css';
import '../../css/v/v-hvuw-wl.css';
import '../../css/n/n0680roia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec7pwm9zi"/><circle class="fzunxilou"/><path class="v-hvuw-wl"/><path class="n0680roia"/>`,
		"fallback": "selfhst:nodyx",
	});
}

export default Component;
