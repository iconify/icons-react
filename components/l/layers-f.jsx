import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5ookx5_r.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5ookx5_r"/>`,
		"fallback": "jam:layers-f",
	});
}

export default Component;
