import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2s5ybq2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2s5ybq2c"/>`,
		"fallback": "tabler:layers-union",
	});
}

export default Component;
