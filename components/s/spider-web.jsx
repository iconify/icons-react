import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ist6y-axk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ist6y-axk"/>`,
		"fallback": "fluent-emoji-high-contrast:spider-web",
	});
}

export default Component;
