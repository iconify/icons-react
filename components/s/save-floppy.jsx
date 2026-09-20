import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u97ccj73n.css';
import '../../css/h/h4zd8yfzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u97ccj73n"/><path class="h4zd8yfzg"/></g>`,
		"fallback": "mage:save-floppy",
	});
}

export default Component;
