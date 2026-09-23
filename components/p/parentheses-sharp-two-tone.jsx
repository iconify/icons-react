import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epm1c_bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epm1c_bnf"/>`,
		"fallback": "keyline-icons:parentheses-sharp-two-tone",
	});
}

export default Component;
