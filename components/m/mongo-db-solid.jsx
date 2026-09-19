import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krq7gibqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="krq7gibqk"/>`,
		"fallback": "flowbite:mongo-db-solid",
	});
}

export default Component;
