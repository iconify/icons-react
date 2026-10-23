import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl-ijsbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl-ijsbyq"/>`,
		"fallback": "vadivam:server-off",
	});
}

export default Component;
