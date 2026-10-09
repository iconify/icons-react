import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0wuxkb3p.css';
import '../../css/s/s-8c-vb5u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0wuxkb3p"/><path class="s-8c-vb5u"/>`,
		"fallback": "energy-icons:picnic-48-bold",
	});
}

export default Component;
