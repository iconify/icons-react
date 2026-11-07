import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocavnt7jz.css';
import '../../css/k/kkhl62fff.css';
import '../../css/o/o-v99zb0r.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocavnt7jz"/><path class="kkhl62fff"/><path class="o-v99zb0r"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:menu-dots-square-outline",
	});
}

export default Component;
