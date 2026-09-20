import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/m93mi0baz.css';
import '../../css/b/bzahmz7mw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="m93mi0baz"/><path class="bzahmz7mw"/></g>`,
		"fallback": "system-uicons:projector",
	});
}

export default Component;
