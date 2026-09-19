import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg1m4vb6k.css';
import '../../css/o/ovova4bys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg1m4vb6k"/><path class="ovova4bys"/>`,
		"fallback": "carbon:thunderstorm-scattered-night",
	});
}

export default Component;
