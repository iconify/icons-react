import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/u/ua2d-bdfl.css';
import '../../css/j/jn4omiblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="ua2d-bdfl"/><path class="jn4omiblp"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-pop",
	});
}

export default Component;
