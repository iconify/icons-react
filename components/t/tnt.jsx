import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auw7t_nln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auw7t_nln"/>`,
		"fallback": "simple-icons:tnt",
	});
}

export default Component;
