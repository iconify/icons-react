import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvkjf9-0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvkjf9-0t"/>`,
		"fallback": "heroicons:squares-2x2-solid",
	});
}

export default Component;
