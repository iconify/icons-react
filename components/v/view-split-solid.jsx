import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u80842buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u80842buq"/>`,
		"fallback": "sidekickicons:view-split-solid",
	});
}

export default Component;
