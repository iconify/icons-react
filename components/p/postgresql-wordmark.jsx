import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxkx72bus.css';
import '../../css/b/byx4gtwse.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxkx72bus"/><path class="byx4gtwse"/>`,
		"fallback": "devicon-plain:postgresql-wordmark",
	});
}

export default Component;
