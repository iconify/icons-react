import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gihz8l71i.css';
import '../../css/y/y5yt-wbzp.css';
import '../../css/j/j6_cfl97f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gihz8l71i"/><path class="y5yt-wbzp"/><path class="j6_cfl97f"/></g>`,
		"fallback": "streamline-cyber:synchronize-2",
	});
}

export default Component;
