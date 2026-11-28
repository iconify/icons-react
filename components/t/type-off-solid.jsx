import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6ul5xvrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6ul5xvrw"/>`,
		"fallback": "iconaut:type-off-solid",
	});
}

export default Component;
