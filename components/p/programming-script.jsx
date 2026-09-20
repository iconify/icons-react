import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/ouzmyy41o.css';
import '../../css/x/xbtlctb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ouzmyy41o"/><path class="xbtlctb9w"/></g>`,
		"fallback": "streamline-cyber:programming-script",
	});
}

export default Component;
