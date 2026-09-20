import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a11tzybnd.css';
import '../../css/a/ao20o-byk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a11tzybnd"/><path class="ao20o-byk"/>`,
		"fallback": "selfhst:tianji",
	});
}

export default Component;
