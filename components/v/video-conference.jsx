import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duc9dub9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duc9dub9o"/>`,
		"fallback": "icon-park-outline:video-conference",
	});
}

export default Component;
