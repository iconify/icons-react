import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e__xz9bvx.css';
import '../../css/x/x6k9-3z8c.css';
import '../../css/s/shxaa7jyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e__xz9bvx"/><path class="x6k9-3z8c"/><path class="shxaa7jyw"/>`,
		"fallback": "fxemoji:tennisball",
	});
}

export default Component;
