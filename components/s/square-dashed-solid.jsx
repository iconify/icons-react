import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmpy0gb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmpy0gb1c"/>`,
		"fallback": "withicons:square-dashed-solid",
	});
}

export default Component;
