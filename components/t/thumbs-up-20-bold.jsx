import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umia02pax.css';
import '../../css/m/md4i0xbhu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umia02pax"/><path class="md4i0xbhu"/>`,
		"fallback": "energy-icons:thumbs-up-20-bold",
	});
}

export default Component;
