import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eg8wnsuni.css';
import '../../css/p/p7p86-b-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="eg8wnsuni"/><path class="p7p86-b-z"/></g>`,
		"fallback": "icon-park:sleep",
	});
}

export default Component;
