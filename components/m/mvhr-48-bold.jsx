import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/n/nkjpvr3yx.css';
import '../../css/k/k692-916d.css';
import '../../css/n/nuzcmo-be.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="nkjpvr3yx"/><path class="k692-916d"/><path class="nuzcmo-be"/>`,
		"fallback": "energy-icons:mvhr-48-bold",
	});
}

export default Component;
