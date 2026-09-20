import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-7vtqbpg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-7vtqbpg"/>`,
		"fallback": "selfhst:qui-light",
	});
}

export default Component;
