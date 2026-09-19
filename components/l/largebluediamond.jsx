import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq7mjqbvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq7mjqbvv"/>`,
		"fallback": "fxemoji:largebluediamond",
	});
}

export default Component;
