import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54a80bxs.css';
import '../../css/h/hg9w13bex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f54a80bxs"/><path class="hg9w13bex"/>`,
		"fallback": "energy-icons:ski-lift-48",
	});
}

export default Component;
