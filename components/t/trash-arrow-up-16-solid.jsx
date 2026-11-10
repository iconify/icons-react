import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh3o9_kqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh3o9_kqw"/>`,
		"fallback": "sidekickicons:trash-arrow-up-16-solid",
	});
}

export default Component;
