import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szenc4b2c.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szenc4b2c"/>`,
		"fallback": "lineicons:leaf-1",
	});
}

export default Component;
