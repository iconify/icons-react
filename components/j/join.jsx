import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acvzewq0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acvzewq0o"/>`,
		"fallback": "game-icons:join",
	});
}

export default Component;
