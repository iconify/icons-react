import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-s51kssr.css';
import '../../css/j/j74io277e.css';
import '../../css/s/sdjrrqbwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-s51kssr"/><path class="j74io277e"/><path class="sdjrrqbwl"/>`,
		"fallback": "selfhst:minecraft-creeper-light",
	});
}

export default Component;
