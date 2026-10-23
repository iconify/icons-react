import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctu-0cbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctu-0cbpq"/>`,
		"fallback": "vadivam:square-divide",
	});
}

export default Component;
