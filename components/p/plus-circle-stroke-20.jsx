import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xukl73g2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xukl73g2p"/>`,
		"fallback": "garden:plus-circle-stroke-20",
	});
}

export default Component;
