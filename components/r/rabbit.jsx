import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvzm9-bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvzm9-bnq"/>`,
		"fallback": "noviair:rabbit",
	});
}

export default Component;
