import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htgbsacnp.css';
import '../../css/y/ypfktcc0d.css';
import '../../css/d/dd9yyy66g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htgbsacnp"/><path class="ypfktcc0d"/><path class="dd9yyy66g"/>`,
		"fallback": "flat-color-icons:news",
	});
}

export default Component;
