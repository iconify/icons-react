import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqflpkaqy.css';
import '../../css/v/vcu56-q6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqflpkaqy"/><path class="vcu56-q6e"/>`,
		"fallback": "stash:podcast-duotone",
	});
}

export default Component;
