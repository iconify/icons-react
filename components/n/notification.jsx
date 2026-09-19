import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0fux7u2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0fux7u2i"/>`,
		"fallback": "grommet-icons:notification",
	});
}

export default Component;
