import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2khn9on.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd2khn9on"/>`,
		"fallback": "oui:submodule",
	});
}

export default Component;
