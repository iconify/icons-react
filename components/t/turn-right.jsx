import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auv45zkdl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auv45zkdl"/>`,
		"fallback": "fluent-mdl2:turn-right",
	});
}

export default Component;
