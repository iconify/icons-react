import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4kfhgn3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4kfhgn3p"/>`,
		"fallback": "tabler:layout-2",
	});
}

export default Component;
