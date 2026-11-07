import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp0cwnbgx.css';
import '../../css/y/y4fef2bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp0cwnbgx"/><path class="y4fef2bqt"/>`,
		"fallback": "solar:sofa-bold-duotone",
	});
}

export default Component;
