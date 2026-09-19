import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7f-vm4dn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7f-vm4dn"/>`,
		"fallback": "fluent-emoji-high-contrast:waving-hand",
	});
}

export default Component;
