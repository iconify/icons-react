import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzb3omb7i.css';
import '../../css/x/x9dxbgztj.css';

const viewBox = {"width":60,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzb3omb7i"/><path class="x9dxbgztj"/>`,
		"fallback": "thesvg-color:unjs",
	});
}

export default Component;
