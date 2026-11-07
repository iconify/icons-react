import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb6_ytb3v.css';
import '../../css/s/sgottpb5m.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb6_ytb3v"/><path class="sgottpb5m"/><path clip-rule="evenodd" class="nbozb93jk"/>`,
		"fallback": "solar:minimize-square-minimalistic-outline",
	});
}

export default Component;
