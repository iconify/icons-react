import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcfsvabbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcfsvabbs"/>`,
		"fallback": "coolicons:map-pin-off-fill-round",
	});
}

export default Component;
