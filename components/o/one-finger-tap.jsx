import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i17sw5brb.css';
import '../../css/h/hr_h5rbvj.css';
import '../../css/j/jnmc_oe0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="i17sw5brb"/><path class="hr_h5rbvj"/><path class="jnmc_oe0s"/></g>`,
		"fallback": "streamline-plump-color:one-finger-tap",
	});
}

export default Component;
