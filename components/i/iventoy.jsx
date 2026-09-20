import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvoz7pz8e.css';
import '../../css/g/glrhpswps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvoz7pz8e"/><path class="glrhpswps"/>`,
		"fallback": "selfhst:iventoy",
	});
}

export default Component;
