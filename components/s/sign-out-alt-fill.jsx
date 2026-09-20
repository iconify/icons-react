import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_93pgbru.css';
import '../../css/r/ra-4wynoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_93pgbru"/><path class="ra-4wynoj"/>`,
		"fallback": "si:sign-out-alt-fill",
	});
}

export default Component;
