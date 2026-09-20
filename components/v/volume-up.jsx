import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il2cuacvw.css';

const viewBox = {"width":24,"height":24,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il2cuacvw"/>`,
		"fallback": "jam:volume-up",
	});
}

export default Component;
