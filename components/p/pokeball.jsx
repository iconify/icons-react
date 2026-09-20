import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z7y8n2bxg.css';
import '../../css/f/f-810pbxi.css';
import '../../css/e/e-46imleb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="z7y8n2bxg"/><path class="f-810pbxi"/><path class="e-46imleb"/></g>`,
		"fallback": "streamline-cyber:pokeball",
	});
}

export default Component;
