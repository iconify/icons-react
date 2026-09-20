import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aochvebhn.css';
import '../../css/k/kxy6kzbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aochvebhn"/><path class="kxy6kzbos"/>`,
		"fallback": "stash:monetize",
	});
}

export default Component;
