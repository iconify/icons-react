import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn2uuxbep.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn2uuxbep"/>`,
		"fallback": "wi:moon-alt-waning-gibbous-1",
	});
}

export default Component;
