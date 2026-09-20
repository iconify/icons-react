import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z06ze1bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z06ze1bnk"/>`,
		"fallback": "meteor-icons:meta",
	});
}

export default Component;
