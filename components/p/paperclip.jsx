import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6eo0_b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6eo0_b0w"/>`,
		"fallback": "tabler:paperclip",
	});
}

export default Component;
