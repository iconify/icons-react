import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjl5pfj7i.css';
import '../../css/l/lkubu127s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjl5pfj7i"/><path class="lkubu127s"/></g>`,
		"fallback": "devicon-plain:objectivec",
	});
}

export default Component;
