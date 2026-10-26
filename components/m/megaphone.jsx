import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/g/gzk1gqbcs.css';
import '../../css/x/xqtkvnb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="gzk1gqbcs"/><path class="xqtkvnb9e"/></g>`,
		"fallback": "doodle-icons:megaphone",
	});
}

export default Component;
