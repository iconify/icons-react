import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_9dqoa7i.css';
import '../../css/m/m8ijo221w.css';
import '../../css/j/jl8d3n4pz.css';
import '../../css/x/xi0e0lzyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_9dqoa7i"/><path class="m8ijo221w"/><path class="jl8d3n4pz"/><path class="xi0e0lzyd"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-user-4",
	});
}

export default Component;
