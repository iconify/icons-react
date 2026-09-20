import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dibcotb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dibcotb4k"/>`,
		"fallback": "selfhst:repoflow-light",
	});
}

export default Component;
