import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcx7xcdvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcx7xcdvz"/>`,
		"fallback": "streamline-ultimate:walking-1",
	});
}

export default Component;
