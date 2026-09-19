import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5uzvqogd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5uzvqogd"/>`,
		"fallback": "file-icons:nuget",
	});
}

export default Component;
