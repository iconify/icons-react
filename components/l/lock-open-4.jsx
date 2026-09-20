import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d0bg-d8ye.css';
import '../../css/o/o-_l8bb1k.css';
import '../../css/q/q-ybajblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="d0bg-d8ye"/><path class="o-_l8bb1k"/><path class="q-ybajblm"/></g>`,
		"fallback": "streamline-cyber:lock-open-4",
	});
}

export default Component;
