import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-sr4yt-t.css';
import '../../css/l/l3cxynbly.css';
import '../../css/a/asc15gb8k.css';

const viewBox = {"width":525,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-sr4yt-t"/><path class="l3cxynbly"/><path class="asc15gb8k"/>`,
		"fallback": "file-icons:stylelint",
	});
}

export default Component;
