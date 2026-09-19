import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm6j0-c1z.css';
import '../../css/z/z0f18mbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm6j0-c1z"/><path clip-rule="evenodd" class="z0f18mbak"/>`,
		"fallback": "basil:settings-solid",
	});
}

export default Component;
