import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2t2gy6cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2t2gy6cc"/>`,
		"fallback": "uil:lock-slash",
	});
}

export default Component;
