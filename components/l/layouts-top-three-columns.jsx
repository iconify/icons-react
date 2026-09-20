import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxfn37b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxfn37b6w"/>`,
		"fallback": "streamline-freehand:layouts-top-three-columns",
	});
}

export default Component;
