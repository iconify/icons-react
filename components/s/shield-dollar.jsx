import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px2gognml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px2gognml"/>`,
		"fallback": "tabler:shield-dollar",
	});
}

export default Component;
