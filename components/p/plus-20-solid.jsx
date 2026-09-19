import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5qs4zbpz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5qs4zbpz"/>`,
		"fallback": "heroicons:plus-20-solid",
	});
}

export default Component;
