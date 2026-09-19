import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5_bh3bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n5_bh3bds"/>`,
		"fallback": "healthicons:spine-outline-24px",
	});
}

export default Component;
