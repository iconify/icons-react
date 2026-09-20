import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9jlqc4uo.css';
import '../../css/d/d5_4t-xws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="q9jlqc4uo"/><path class="d5_4t-xws"/>`,
		"fallback": "selfhst:stormkit",
	});
}

export default Component;
