import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsiiab0r.css';
import '../../css/b/brt3oix6x.css';
import '../../css/p/p1dx4ebbe.css';
import '../../css/n/nh25m9bfu.css';
import '../../css/z/zu1a0cbvh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dpsiiab0r"><path class="brt3oix6x"/><path class="p1dx4ebbe"/></g><path class="nh25m9bfu"/><circle class="zu1a0cbvh"/>`,
		"fallback": "openmoji:on-exclamation-arrow",
	});
}

export default Component;
