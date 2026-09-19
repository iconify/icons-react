import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ygb96zu.css';
import '../../css/s/saol7rb8i.css';
import '../../css/h/h49yzab-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ygb96zu"/><path class="saol7rb8i"/><path class="h49yzab-b"/>`,
		"fallback": "fluent-emoji-high-contrast:person-with-white-cane-facing-right",
	});
}

export default Component;
