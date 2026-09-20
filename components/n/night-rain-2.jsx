import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pkpfbk5ad.css';
import '../../css/p/pr8eloxdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pkpfbk5ad"/><path class="pr8eloxdj"/></g>`,
		"fallback": "streamline-cyber:night-rain-2",
	});
}

export default Component;
