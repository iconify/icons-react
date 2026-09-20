import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbq8g6v3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbq8g6v3f"/>`,
		"fallback": "mynaui:letter-i-diamond-solid",
	});
}

export default Component;
