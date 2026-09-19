import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/s/s_8qyd8iz.css';
import '../../css/g/g92hyzclq.css';
import '../../css/h/h2x_h3b3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="s_8qyd8iz"/><path class="g92hyzclq"/><path class="h2x_h3b3t"/></g>`,
		"fallback": "icon-park-outline:liqueur",
	});
}

export default Component;
