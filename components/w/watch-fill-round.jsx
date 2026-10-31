import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixp0i4b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixp0i4b6w"/>`,
		"fallback": "coolicons:watch-fill-round",
	});
}

export default Component;
