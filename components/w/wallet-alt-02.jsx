import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sywya8b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sywya8b6h"/>`,
		"fallback": "griddy-icons:wallet-alt-02",
	});
}

export default Component;
