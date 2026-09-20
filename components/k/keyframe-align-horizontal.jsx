import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxy64actr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxy64actr"/>`,
		"fallback": "tabler:keyframe-align-horizontal",
	});
}

export default Component;
