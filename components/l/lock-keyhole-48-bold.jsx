import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm6x03w9o.css';
import '../../css/q/q5_nrjb0f.css';
import '../../css/m/mlj68nbxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm6x03w9o"/><path class="q5_nrjb0f"/><path class="mlj68nbxk"/>`,
		"fallback": "energy-icons:lock-keyhole-48-bold",
	});
}

export default Component;
