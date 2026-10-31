import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfknb81as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xfknb81as"/>`,
		"fallback": "sidekickicons:triangle-solid",
	});
}

export default Component;
