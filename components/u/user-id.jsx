import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1x756bcr.css';
import '../../css/a/av7mo7pep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1x756bcr"/><path class="av7mo7pep"/>`,
		"fallback": "stash:user-id",
	});
}

export default Component;
