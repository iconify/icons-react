import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smzo33q6c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smzo33q6c"/>`,
		"fallback": "heroicons-solid:user-group",
	});
}

export default Component;
