import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jil8u0uzb.css';
import '../../css/p/pmfa-2b0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="jil8u0uzb"/><path class="pmfa-2b0d"/></g>`,
		"fallback": "icon-park:monument-two",
	});
}

export default Component;
