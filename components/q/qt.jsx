import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh_luwtku.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh_luwtku"/>`,
		"fallback": "devicon:qt",
	});
}

export default Component;
