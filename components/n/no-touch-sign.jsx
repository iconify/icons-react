import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vx21_pbol.css';
import '../../css/z/zz9utabca.css';
import '../../css/s/s1mixob7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="vx21_pbol"/><path class="zz9utabca"/><path class="s1mixob7h"/></g>`,
		"fallback": "streamline-plump-color:no-touch-sign",
	});
}

export default Component;
