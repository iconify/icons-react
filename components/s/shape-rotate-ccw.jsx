import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnha371ox.css';
import '../../css/z/zbsurkc7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b xnha371ox"/><path class="b zbsurkc7p"/>`,
		"fallback": "boxicons:shape-rotate-ccw",
	});
}

export default Component;
