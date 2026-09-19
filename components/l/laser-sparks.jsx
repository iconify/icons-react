import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndp1xjtvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndp1xjtvg"/>`,
		"fallback": "game-icons:laser-sparks",
	});
}

export default Component;
