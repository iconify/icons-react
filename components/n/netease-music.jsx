import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqsd-vb0j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqsd-vb0j"/>`,
		"fallback": "dinkie-icons:netease-music",
	});
}

export default Component;
