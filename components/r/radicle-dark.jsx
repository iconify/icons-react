import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwyel9bps.css';
import '../../css/v/vzf2kqbwe.css';
import '../../css/v/vyby-xbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwyel9bps"/><path class="vzf2kqbwe"/><path class="vyby-xbyp"/>`,
		"fallback": "selfhst:radicle-dark",
	});
}

export default Component;
