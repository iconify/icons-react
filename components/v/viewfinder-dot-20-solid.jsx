import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll6-iwbcg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll6-iwbcg"/>`,
		"fallback": "heroicons:viewfinder-dot-20-solid",
	});
}

export default Component;
