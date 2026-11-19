import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxy12r89z.css';
import '../../css/j/jdijwxbvy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxy12r89z"/><path class="jdijwxbvy"/>`,
		"fallback": "selfhst:ph-intercept-light",
	});
}

export default Component;
