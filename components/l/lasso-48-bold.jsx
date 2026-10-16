import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lydoh1n-z.css';
import '../../css/l/laty4l76k.css';
import '../../css/k/k_8z-tbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lydoh1n-z"/><path class="laty4l76k"/><path class="k_8z-tbww"/>`,
		"fallback": "energy-icons:lasso-48-bold",
	});
}

export default Component;
