import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl2na2b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl2na2b8g"/>`,
		"fallback": "tabler:star-off",
	});
}

export default Component;
