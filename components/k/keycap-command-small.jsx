import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyl1kfb7x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyl1kfb7x"/>`,
		"fallback": "dinkie-icons:keycap-command-small",
	});
}

export default Component;
