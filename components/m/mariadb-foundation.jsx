import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av028pqzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av028pqzm"/>`,
		"fallback": "thesvg:mariadb-foundation",
	});
}

export default Component;
