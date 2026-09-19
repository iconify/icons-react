import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/j/j12neilvd.css';
import '../../css/s/stxxazbuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="j12neilvd"/><path class="stxxazbuh"/></g>`,
		"fallback": "icon-park-outline:right-branch-one",
	});
}

export default Component;
