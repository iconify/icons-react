import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmsnddboj.css';
import '../../css/j/jc8vjxbbg.css';
import '../../css/g/g68oh1czg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmsnddboj"/><path class="jc8vjxbbg"/><path class="g68oh1czg"/>`,
		"fallback": "energy-icons:tea-cup-48",
	});
}

export default Component;
