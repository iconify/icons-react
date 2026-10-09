import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbmfgacnw.css';
import '../../css/d/d90ivtb7s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbmfgacnw"/><path class="d90ivtb7s"/>`,
		"fallback": "energy-icons:prism-20-bold",
	});
}

export default Component;
