import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmpb--8va.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmpb--8va"/>`,
		"fallback": "fa7-brands:lastfm",
	});
}

export default Component;
