import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvc9hzisg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvc9hzisg"/>`,
		"fallback": "simple-icons:leslibraires",
	});
}

export default Component;
