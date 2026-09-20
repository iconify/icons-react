import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1sx3v3fk.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1sx3v3fk"/>`,
		"fallback": "octicon:mail",
	});
}

export default Component;
