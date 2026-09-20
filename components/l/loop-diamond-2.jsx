import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vvhessdxw.css';
import '../../css/d/dh42uhb2x.css';
import '../../css/p/pkqbodbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vvhessdxw"/><path class="dh42uhb2x"/><path class="pkqbodbfw"/></g>`,
		"fallback": "streamline-cyber:loop-diamond-2",
	});
}

export default Component;
