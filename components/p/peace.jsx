import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/dm8ecmc0q.css';
import '../../css/h/hy2l72guf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="dm8ecmc0q"/><path class="hy2l72guf"/></g>`,
		"fallback": "streamline-cyber:peace",
	});
}

export default Component;
