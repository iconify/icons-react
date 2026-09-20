import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvk-0wi1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvk-0wi1p"/>`,
		"fallback": "sidekickicons:lettered-list-solid",
	});
}

export default Component;
