import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohewcy22n.css';
import '../../css/e/eogp9ogkm.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohewcy22n"/><path class="eogp9ogkm"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:tunnel-48-bold",
	});
}

export default Component;
