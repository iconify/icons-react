import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4iwckbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4iwckbzc"/>`,
		"fallback": "withicons:table-of-contents-solid",
	});
}

export default Component;
