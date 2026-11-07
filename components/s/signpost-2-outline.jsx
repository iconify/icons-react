import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_rsiugdn.css';
import '../../css/y/y9b85obej.css';
import '../../css/z/zy2mkqs2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_rsiugdn"/><path class="y9b85obej"/><path clip-rule="evenodd" class="zy2mkqs2z"/>`,
		"fallback": "solar:signpost-2-outline",
	});
}

export default Component;
