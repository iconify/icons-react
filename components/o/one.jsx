import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw1f1pl0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw1f1pl0j"/>`,
		"fallback": "icon-park-outline:one",
	});
}

export default Component;
