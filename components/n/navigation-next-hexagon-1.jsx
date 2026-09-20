import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/je7grsy9a.css';
import '../../css/r/r7ekmboxx.css';
import '../../css/t/t-c46r-6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="je7grsy9a"/><path class="r7ekmboxx"/><path class="t-c46r-6c"/></g>`,
		"fallback": "streamline-cyber:navigation-next-hexagon-1",
	});
}

export default Component;
