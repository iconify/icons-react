import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufavf3byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufavf3byq"/>`,
		"fallback": "vadivam:pocket-knife",
	});
}

export default Component;
