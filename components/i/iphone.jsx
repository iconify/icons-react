import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktvza_ycb.css';
import '../../css/a/ajbc88bet.css';
import '../../css/u/u9db6-ydy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktvza_ycb"/><path class="ajbc88bet"/><circle class="u9db6-ydy"/>`,
		"fallback": "flat-color-icons:iphone",
	});
}

export default Component;
