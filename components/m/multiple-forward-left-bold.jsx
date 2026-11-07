import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huxj-vhdc.css';
import '../../css/g/gqrwazmcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huxj-vhdc"/><path clip-rule="evenodd" class="gqrwazmcy"/>`,
		"fallback": "solar:multiple-forward-left-bold",
	});
}

export default Component;
