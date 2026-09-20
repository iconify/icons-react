import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgk9nmbel.css';
import '../../css/u/uf68rgz2p.css';
import '../../css/m/m-r43mcvd.css';
import '../../css/c/chgg2-0qo.css';
import '../../css/t/t9p3m7izt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgk9nmbel"/><path class="uf68rgz2p"/><path class="m-r43mcvd"/><path class="chgg2-0qo"/><path class="t9p3m7izt"/></g>`,
		"fallback": "streamline-ultimate-color:laptop-smiley-1",
	});
}

export default Component;
