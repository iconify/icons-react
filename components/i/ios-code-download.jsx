import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt5z90bty.css';
import '../../css/r/r7co23qft.css';
import '../../css/w/wpnqak87z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt5z90bty"/><path class="r7co23qft"/><path class="wpnqak87z"/>`,
		"fallback": "ion:ios-code-download",
	});
}

export default Component;
