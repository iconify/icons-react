import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yo3sfnbjo.css';
import '../../css/h/h4y-wyiui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yo3sfnbjo"/><path class="h4y-wyiui"/></g>`,
		"fallback": "keyline-icons:list-ordered-duotone",
	});
}

export default Component;
