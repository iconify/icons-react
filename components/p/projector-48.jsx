import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjly8-_kl.css';
import '../../css/g/gf8o-_-9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjly8-_kl"/><path class="gf8o-_-9z"/>`,
		"fallback": "energy-icons:projector-48",
	});
}

export default Component;
