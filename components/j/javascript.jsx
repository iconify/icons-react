import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arrq9cbru.css';
import '../../css/d/d08_cxnnu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arrq9cbru"/><path class="d08_cxnnu"/>`,
		"fallback": "devicon:javascript",
	});
}

export default Component;
