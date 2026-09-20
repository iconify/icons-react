import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruqe1zbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruqe1zbxq"/>`,
		"fallback": "thesvg-color:john-deere",
	});
}

export default Component;
