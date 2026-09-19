import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/m5ipfl-ew.css';
import '../../css/l/l3m1edc6e.css';
import '../../css/y/y6ess1bmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="m5ipfl-ew"/><circle class="l3m1edc6e"/><path class="y6ess1bmp"/></g>`,
		"fallback": "icon-park:people-safe",
	});
}

export default Component;
