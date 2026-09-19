import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv7i-tbsw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv7i-tbsw"/>`,
		"fallback": "dinkie-icons:keycap-digit-one-small-filled",
	});
}

export default Component;
