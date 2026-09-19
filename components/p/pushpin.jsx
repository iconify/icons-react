import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt3tjbgsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt3tjbgsr"/>`,
		"fallback": "icon-park-solid:pushpin",
	});
}

export default Component;
