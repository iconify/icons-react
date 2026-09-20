import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8-0jeb9m.css';
import '../../css/o/o_2dpvb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8-0jeb9m"/><path class="o_2dpvb9c"/>`,
		"fallback": "pixel:wallet",
	});
}

export default Component;
