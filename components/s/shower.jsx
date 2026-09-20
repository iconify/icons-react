import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fri_krb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fri_krb8r"/>`,
		"fallback": "mdi:shower",
	});
}

export default Component;
