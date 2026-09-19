import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw5x8425k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw5x8425k"/>`,
		"fallback": "bxs:key",
	});
}

export default Component;
