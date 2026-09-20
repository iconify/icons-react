import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as2oyjb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as2oyjb2u"/>`,
		"fallback": "keyline-icons:mouse",
	});
}

export default Component;
