import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fch71nbbb.css';
import '../../css/o/o9pzl2byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fch71nbbb"/><path class="o9pzl2byt"/></g>`,
		"fallback": "streamline-cyber:user-chat-dollar",
	});
}

export default Component;
