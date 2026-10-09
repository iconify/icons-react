import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9uhwm-oy.css';
import '../../css/y/yk_hnf1it.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9uhwm-oy"/><path class="yk_hnf1it"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:ppa-signed-48",
	});
}

export default Component;
