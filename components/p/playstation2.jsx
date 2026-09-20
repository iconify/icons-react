import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh8dv8nts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh8dv8nts"/>`,
		"fallback": "simple-icons:playstation2",
	});
}

export default Component;
