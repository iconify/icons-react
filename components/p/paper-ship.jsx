import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/sgsgpx56o.css';
import '../../css/i/i0b4m805c.css';
import '../../css/f/frazcab9n.css';
import '../../css/f/fgz98zbsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="sgsgpx56o"/><path class="i0b4m805c"/><path class="frazcab9n"/><path class="fgz98zbsr"/></g>`,
		"fallback": "icon-park:paper-ship",
	});
}

export default Component;
