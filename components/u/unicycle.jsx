import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiau1be2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiau1be2c"/>`,
		"fallback": "tabler:unicycle",
	});
}

export default Component;
