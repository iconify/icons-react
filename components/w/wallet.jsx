import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f3o_89baw.css';
import '../../css/a/az08boy2n.css';
import '../../css/x/x8_o6_mhk.css';
import '../../css/t/ta3nl5tvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="f3o_89baw"/><path class="az08boy2n"/><path class="x8_o6_mhk"/><path class="ta3nl5tvi"/></g>`,
		"fallback": "streamline-plump-color:wallet",
	});
}

export default Component;
