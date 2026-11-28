import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aldbqnb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aldbqnb5t primary"/>`,
		"fallback": "iconaut:person-running-duotone",
	});
}

export default Component;
