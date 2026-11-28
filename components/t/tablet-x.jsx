import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrhv1bcks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrhv1bcks"/>`,
		"fallback": "noviair:tablet-x",
	});
}

export default Component;
