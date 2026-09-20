import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bl2413pzu.css';
import '../../css/m/m5vqg1b3x.css';

const viewBox = {"width":576,"height":619};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="bl2413pzu"/><path class="m5vqg1b3x"/></g>`,
		"fallback": "thesvg-color:orildo",
	});
}

export default Component;
