import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxie47bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxie47bpz"/>`,
		"fallback": "reicon:search-zoom-in",
	});
}

export default Component;
