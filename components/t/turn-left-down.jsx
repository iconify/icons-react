import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrk-82bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrk-82bew"/>`,
		"fallback": "meteor-icons:turn-left-down",
	});
}

export default Component;
