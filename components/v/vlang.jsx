import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5o67xb4n.css';
import '../../css/v/vclaoe-gr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5o67xb4n"/><path class="vclaoe-gr"/>`,
		"fallback": "devicon:vlang",
	});
}

export default Component;
