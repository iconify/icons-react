import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3sibft6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3sibft6u"/>`,
		"fallback": "iconaut:phone-forwarded-solid",
	});
}

export default Component;
