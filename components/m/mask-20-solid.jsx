import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpt_1mb-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpt_1mb-a"/>`,
		"fallback": "sidekickicons:mask-20-solid",
	});
}

export default Component;
