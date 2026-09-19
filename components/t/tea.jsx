import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ujyvenbos.css';
import '../../css/y/yokqbnb6v.css';
import '../../css/y/yonyb1bwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ujyvenbos"/><path class="yokqbnb6v"/><path class="yonyb1bwh"/></g>`,
		"fallback": "icon-park-solid:tea",
	});
}

export default Component;
