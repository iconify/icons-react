import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/bjogh6b3n.css';
import '../../css/h/hlqi7zbwo.css';
import '../../css/i/inudikbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="bjogh6b3n"/><path class="hlqi7zbwo"/></g><path class="inudikbbf"/>`,
		"fallback": "solar:posts-carousel-horizontal-bold-duotone",
	});
}

export default Component;
