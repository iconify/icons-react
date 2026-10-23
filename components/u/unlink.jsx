import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jci9iccjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jci9iccjq"/>`,
		"fallback": "vadivam:unlink",
	});
}

export default Component;
