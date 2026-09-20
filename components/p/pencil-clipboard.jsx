import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z8-kntgdl.css';
import '../../css/n/n7wgfethx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="z8-kntgdl"/><path class="n7wgfethx"/></g>`,
		"fallback": "streamline-cyber:pencil-clipboard",
	});
}

export default Component;
