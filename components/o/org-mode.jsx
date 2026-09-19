import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgznimbmg.css';

const viewBox = {"width":467,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgznimbmg"/>`,
		"fallback": "file-icons:org-mode",
	});
}

export default Component;
