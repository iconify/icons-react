import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cs89rebsz.css';
import '../../css/u/ug7x6sbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cs89rebsz"/><path class="ug7x6sbwv"/></g>`,
		"fallback": "streamline-cyber:skull-1",
	});
}

export default Component;
