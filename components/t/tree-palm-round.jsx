import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g21x4li4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g21x4li4g"/>`,
		"fallback": "coolicons:tree-palm-round",
	});
}

export default Component;
