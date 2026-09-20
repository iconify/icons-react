import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hli067zcj.css';
import '../../css/n/nqh84-7ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hli067zcj"/><path class="nqh84-7ze"/></g>`,
		"fallback": "streamline-cyber:lock-shield",
	});
}

export default Component;
