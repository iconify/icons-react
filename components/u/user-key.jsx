import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1__oqeqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1__oqeqa"/>`,
		"fallback": "vadivam:user-key",
	});
}

export default Component;
