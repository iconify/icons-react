import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esbwj800h.css';
import '../../css/x/xad-8sbqh.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esbwj800h"/><path class="xad-8sbqh"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:vertical-solar-48-bold",
	});
}

export default Component;
