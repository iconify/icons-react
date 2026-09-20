import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/ilhd1sjdf.css';
import '../../css/o/og-tzcxui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ilhd1sjdf"/><path class="og-tzcxui"/></g>`,
		"fallback": "streamline-cyber:treasure-chest-open",
	});
}

export default Component;
