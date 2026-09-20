import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvbyes_1x.css';
import '../../css/k/km4trlp0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvbyes_1x"/><path class="km4trlp0p"/></g>`,
		"fallback": "tdesign:share-1",
	});
}

export default Component;
