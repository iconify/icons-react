import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aph_dqbwx.css';
import '../../css/r/rulnoebmk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aph_dqbwx"/><path class="rulnoebmk"/>`,
		"fallback": "selfhst:proton-mail-bridge-light",
	});
}

export default Component;
