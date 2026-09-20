import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h37v7nb9a.css';
import '../../css/l/lc8v94brc.css';
import '../../css/j/jiukz6bpt.css';
import '../../css/k/kmr170_nv.css';
import '../../css/c/cbdh1qlag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h37v7nb9a"/><path class="lc8v94brc"/><path class="jiukz6bpt"/><path class="kmr170_nv"/><path class="cbdh1qlag"/></g>`,
		"fallback": "streamline-sharp-color:watch-circle-bluetooth",
	});
}

export default Component;
