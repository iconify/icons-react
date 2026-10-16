import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8w6b6l9s.css';
import '../../css/i/i1aaxkb5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8w6b6l9s"/><path class="i1aaxkb5y"/>`,
		"fallback": "energy-icons:plug-uk-48",
	});
}

export default Component;
