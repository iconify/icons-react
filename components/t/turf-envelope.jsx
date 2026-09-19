import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vunxkfbbd.css';
import '../../css/f/fsxxlibal.css';
import '../../css/o/okepkxbbb.css';
import '../../css/q/qtvldmb0n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vunxkfbbd"/><circle class="fsxxlibal"/><circle class="okepkxbbb"/><path class="qtvldmb0n"/>`,
		"fallback": "geo:turf-envelope",
	});
}

export default Component;
