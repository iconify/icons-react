import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sddwh4xus.css';

const viewBox = {"width":1020,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sddwh4xus"/>`,
		"fallback": "whh:mute",
	});
}

export default Component;
