import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpqh3i39z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpqh3i39z"/>`,
		"fallback": "icon-park-solid:phone-telephone",
	});
}

export default Component;
