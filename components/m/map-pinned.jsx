import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is090zbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is090zbep"/>`,
		"fallback": "vadivam:map-pinned",
	});
}

export default Component;
