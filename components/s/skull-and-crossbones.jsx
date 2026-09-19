import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc0jvxbqt.css';
import '../../css/f/fk5rj3b7q.css';
import '../../css/m/m8b73kr7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pc0jvxbqt"/><path class="fk5rj3b7q"/><path class="m8b73kr7c"/></g>`,
		"fallback": "fluent-emoji-flat:skull-and-crossbones",
	});
}

export default Component;
