import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzqw7kbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzqw7kbmu"/>`,
		"fallback": "simple-icons:liquibase",
	});
}

export default Component;
