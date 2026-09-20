import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrbkw7bqm.css';
import '../../css/o/oq2mp8bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrbkw7bqm"/><path class="oq2mp8bbe"/>`,
		"fallback": "pixel:notion",
	});
}

export default Component;
