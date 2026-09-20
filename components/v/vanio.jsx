import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abwvd3b5g.css';
import '../../css/t/t7eub0bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abwvd3b5g"/><path class="t7eub0bye"/>`,
		"fallback": "thesvg-color:vanio",
	});
}

export default Component;
