import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmfv3actq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmfv3actq"/>`,
		"fallback": "mdi:spider-web",
	});
}

export default Component;
