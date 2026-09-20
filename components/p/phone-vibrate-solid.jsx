import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv54j2pr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mpv54j2pr"/>`,
		"fallback": "streamline-plump:phone-vibrate-solid",
	});
}

export default Component;
