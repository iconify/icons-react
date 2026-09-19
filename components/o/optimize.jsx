import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n5yt22b6q.css';
import '../../css/r/ro0gdgbme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="n5yt22b6q"/><path class="ro0gdgbme"/></g>`,
		"fallback": "icon-park:optimize",
	});
}

export default Component;
