import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shc64lbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shc64lbnq"/>`,
		"fallback": "vadivam:link",
	});
}

export default Component;
