import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/errca7bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="errca7bxg"/>`,
		"fallback": "mynaui:panel-bottom-open-solid",
	});
}

export default Component;
