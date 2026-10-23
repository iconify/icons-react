import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6c4trb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6c4trb0t"/>`,
		"fallback": "vadivam:table-rows-split",
	});
}

export default Component;
