import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef1ej922j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ef1ej922j"/>`,
		"fallback": "sidekickicons:microphone-slash-16-solid",
	});
}

export default Component;
