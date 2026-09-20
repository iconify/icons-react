import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-tmw3m-k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-tmw3m-k"/>`,
		"fallback": "pinhead:pixel-invader",
	});
}

export default Component;
