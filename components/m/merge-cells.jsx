import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/n/n7i9tqp3s.css';
import '../../css/f/fg0o6ubwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="n7i9tqp3s"/><path class="fg0o6ubwk"/></g>`,
		"fallback": "icon-park-outline:merge-cells",
	});
}

export default Component;
