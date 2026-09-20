import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbatfsbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbatfsbjy"/>`,
		"fallback": "mynaui:letter-x-square-solid",
	});
}

export default Component;
