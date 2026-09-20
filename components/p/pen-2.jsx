import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zfrz8cbml.css';
import '../../css/i/imcwoeboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zfrz8cbml"/><path class="imcwoeboq"/></g>`,
		"fallback": "streamline-cyber:pen-2",
	});
}

export default Component;
