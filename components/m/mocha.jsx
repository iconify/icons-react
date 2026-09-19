import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhcgfebjd.css';
import '../../css/z/zmii52bpu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhcgfebjd"/><path class="zmii52bpu"/>`,
		"fallback": "devicon:mocha",
	});
}

export default Component;
