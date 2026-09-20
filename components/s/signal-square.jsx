import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/awj5_wbfc.css';
import '../../css/s/sajlr8bmq.css';
import '../../css/i/il6lmcvkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="awj5_wbfc"/><path class="sajlr8bmq"/><path class="il6lmcvkx"/></g>`,
		"fallback": "streamline-cyber:signal-square",
	});
}

export default Component;
