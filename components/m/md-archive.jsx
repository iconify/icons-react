import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2cqbxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9a2cqbxn"/>`,
		"fallback": "ion:md-archive",
	});
}

export default Component;
