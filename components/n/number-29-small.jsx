import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7jt3bbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7jt3bbpe"/>`,
		"fallback": "tabler:number-29-small",
	});
}

export default Component;
