import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svkx5-wgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svkx5-wgd"/>`,
		"fallback": "thesvg-color:nextbilliondotai",
	});
}

export default Component;
