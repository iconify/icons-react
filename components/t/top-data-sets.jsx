import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmtb2gbnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmtb2gbnf"/>`,
		"fallback": "carbon:top-data-sets",
	});
}

export default Component;
