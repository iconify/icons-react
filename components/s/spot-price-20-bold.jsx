import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdwp1kh1x.css';
import '../../css/b/b3qkz99-a.css';
import '../../css/d/d1xy-t7vc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdwp1kh1x"/><path class="b3qkz99-a"/><path class="d1xy-t7vc"/>`,
		"fallback": "energy-icons:spot-price-20-bold",
	});
}

export default Component;
