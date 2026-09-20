import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx4oct3hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx4oct3hz"/>`,
		"fallback": "mage:multiply-square-fill",
	});
}

export default Component;
