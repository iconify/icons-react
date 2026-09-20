import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tefesk3cw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tefesk3cw"/>`,
		"fallback": "selfhst:usertour-light",
	});
}

export default Component;
