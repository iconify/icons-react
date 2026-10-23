import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b86dbmu5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b86dbmu5y"/>`,
		"fallback": "vadivam:subscript",
	});
}

export default Component;
