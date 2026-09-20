import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nyxdt81yi.css';
import '../../css/a/a645d4eea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nyxdt81yi"/><path class="a645d4eea"/></g>`,
		"fallback": "streamline-cyber:mouse",
	});
}

export default Component;
