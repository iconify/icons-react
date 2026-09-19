import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cog2mfnwi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cog2mfnwi"/>`,
		"fallback": "fa7-regular:list-alt",
	});
}

export default Component;
