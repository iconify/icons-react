import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npdwm_bbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npdwm_bbw"/>`,
		"fallback": "fluent-emoji-high-contrast:old-man",
	});
}

export default Component;
