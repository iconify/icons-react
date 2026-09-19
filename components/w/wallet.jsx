import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-8yqkjzv.css';
import '../../css/u/u3odm3brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-8yqkjzv"/><path class="u3odm3brm"/>`,
		"fallback": "fontisto:wallet",
	});
}

export default Component;
