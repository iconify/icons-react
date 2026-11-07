import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m22iwcsgw.css';
import '../../css/d/dg1dhqmqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m22iwcsgw"/><path class="dg1dhqmqv"/>`,
		"fallback": "solar:server-path-bold-duotone",
	});
}

export default Component;
