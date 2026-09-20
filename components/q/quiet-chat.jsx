import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r60ej9bjx.css';
import '../../css/f/f91k7jbaj.css';
import '../../css/x/xs2wbd9sc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r60ej9bjx"/><path class="f91k7jbaj"/><path class="xs2wbd9sc"/>`,
		"fallback": "selfhst:quiet-chat",
	});
}

export default Component;
