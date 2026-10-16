import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4hf1bcaj.css';
import '../../css/b/b6bjo8bom.css';
import '../../css/a/ad_8r9xgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4hf1bcaj"/><path class="b6bjo8bom"/><path class="ad_8r9xgg"/>`,
		"fallback": "energy-icons:pharmacy-20-bold",
	});
}

export default Component;
