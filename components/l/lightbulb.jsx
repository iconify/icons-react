import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2a3wkb1b.css';
import '../../css/w/wgit70b4c.css';
import '../../css/s/s1d1a8lrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2a3wkb1b"/><path class="wgit70b4c"/><path class="s1d1a8lrp"/>`,
		"fallback": "pixel:lightbulb",
	});
}

export default Component;
