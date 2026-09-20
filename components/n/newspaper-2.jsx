import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d5ro20i6y.css';
import '../../css/d/dgg72ibqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="d5ro20i6y"/><path class="dgg72ibqa"/></g>`,
		"fallback": "streamline-cyber:newspaper-2",
	});
}

export default Component;
