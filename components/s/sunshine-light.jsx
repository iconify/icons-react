import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igxg7ab5n.css';
import '../../css/a/aw61reb1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igxg7ab5n"/><path class="aw61reb1g"/>`,
		"fallback": "selfhst:sunshine-light",
	});
}

export default Component;
