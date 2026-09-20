import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7i7wkb7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7i7wkb7a"/>`,
		"fallback": "ix:simit-macro-component-editor",
	});
}

export default Component;
