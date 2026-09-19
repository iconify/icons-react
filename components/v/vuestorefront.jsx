import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu5chmb3k.css';
import '../../css/s/s4xleyb5w.css';
import '../../css/l/l1pj3bg-y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wu5chmb3k"/><path class="s4xleyb5w"/><path class="l1pj3bg-y"/>`,
		"fallback": "devicon:vuestorefront",
	});
}

export default Component;
