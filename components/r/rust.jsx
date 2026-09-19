import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmgp09f-s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmgp09f-s"/>`,
		"fallback": "devicon:rust",
	});
}

export default Component;
