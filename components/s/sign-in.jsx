import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb9885b4p.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb9885b4p"/>`,
		"fallback": "octicon:sign-in",
	});
}

export default Component;
