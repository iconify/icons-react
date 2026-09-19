import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/o8o5xp5ok.css';
import '../../css/b/bibijobzs.css';
import '../../css/y/yzreu6pwo.css';
import '../../css/o/o3zfdisfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="o8o5xp5ok"/><path class="bibijobzs"/><path class="yzreu6pwo"/><path class="o3zfdisfw"/></g>`,
		"fallback": "icon-park:pregnant-women",
	});
}

export default Component;
