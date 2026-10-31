import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3n9zob-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3n9zob-j"/>`,
		"fallback": "sidekickicons:view-split-20-solid",
	});
}

export default Component;
