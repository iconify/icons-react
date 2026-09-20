import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lizqbob8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lizqbob8w"/>`,
		"fallback": "ri:vip-fill",
	});
}

export default Component;
