import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dct4eibpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dct4eibpw"/>`,
		"fallback": "vadivam:user-cog",
	});
}

export default Component;
