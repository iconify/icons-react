import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs1vf-b3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bs1vf-b3c"/>`,
		"fallback": "sidekickicons:trash-arrow-up-20-solid",
	});
}

export default Component;
