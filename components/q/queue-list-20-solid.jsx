import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ian07eb2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ian07eb2s"/>`,
		"fallback": "heroicons:queue-list-20-solid",
	});
}

export default Component;
