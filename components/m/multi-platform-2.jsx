import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dw11w-k7r.css';
import '../../css/e/e2a3plb4d.css';
import '../../css/e/eondm3bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="dw11w-k7r"/><path class="e2a3plb4d"/><path class="eondm3bhy"/></g>`,
		"fallback": "streamline-cyber:multi-platform-2",
	});
}

export default Component;
