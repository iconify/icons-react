import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t_i2hmbdh.css';
import '../../css/v/vzl809j6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="t_i2hmbdh"/><path class="vzl809j6k"/></g>`,
		"fallback": "streamline-cyber:logout-1",
	});
}

export default Component;
