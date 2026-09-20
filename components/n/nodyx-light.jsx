import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6s54bcir.css';
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
		"content": `<path class="v6s54bcir"/><circle class="fzunxilou"/><path class="v-hvuw-wl"/><path class="n0680roia"/>`,
		"fallback": "selfhst:nodyx-light",
	});
}

export default Component;
