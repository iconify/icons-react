import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p--5p7e8l.css';
import '../../css/g/grq9qjftd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p--5p7e8l"/><path clip-rule="evenodd" class="grq9qjftd"/>`,
		"fallback": "heroicons:server-stack-16-solid",
	});
}

export default Component;
