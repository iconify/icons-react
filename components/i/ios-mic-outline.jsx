import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-e9bcc3c.css';
import '../../css/d/dr9-gqbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-e9bcc3c"/><path class="dr9-gqbcg"/>`,
		"fallback": "ion:ios-mic-outline",
	});
}

export default Component;
