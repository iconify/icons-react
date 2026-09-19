import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1k9bac8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1k9bac8p"/>`,
		"fallback": "ion:ios-checkmark-circle",
	});
}

export default Component;
