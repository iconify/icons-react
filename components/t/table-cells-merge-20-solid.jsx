import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8_jvyq7w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t8_jvyq7w"/>`,
		"fallback": "sidekickicons:table-cells-merge-20-solid",
	});
}

export default Component;
