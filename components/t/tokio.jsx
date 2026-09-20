import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq-9q5r6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq-9q5r6g"/>`,
		"fallback": "thesvg-color:tokio",
	});
}

export default Component;
