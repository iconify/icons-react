import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1g1yybko.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1g1yybko"/>`,
		"fallback": "wi:moon-waxing-gibbous-6",
	});
}

export default Component;
