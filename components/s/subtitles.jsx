import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkmi6bh9p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkmi6bh9p"/>`,
		"fallback": "material-icon-theme:subtitles",
	});
}

export default Component;
