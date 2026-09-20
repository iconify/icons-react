import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/s6m2yab9o.css';
import '../../css/o/o24qvnbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="s6m2yab9o"/><path class="o24qvnbau"/></g>`,
		"fallback": "streamline-cyber:snorkel-mask-1",
	});
}

export default Component;
