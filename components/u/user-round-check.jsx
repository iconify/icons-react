import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dco4-8bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dco4-8bwq"/>`,
		"fallback": "vadivam:user-round-check",
	});
}

export default Component;
