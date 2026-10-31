import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/a/ajvvthb5e.css';
import '../../css/s/s4czfksfg.css';
import '../../css/p/pcxre4brt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="ajvvthb5e"/><path class="s4czfksfg"/><path class="pcxre4brt"/></g>`,
		"fallback": "streamline-kameleon-color:shopping-4-pop",
	});
}

export default Component;
