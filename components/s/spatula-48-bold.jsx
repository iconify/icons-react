import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3svyccwt.css';
import '../../css/u/us2y8_bfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3svyccwt"/><path class="us2y8_bfl"/>`,
		"fallback": "energy-icons:spatula-48-bold",
	});
}

export default Component;
