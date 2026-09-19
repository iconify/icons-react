import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q97m5m7xg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q97m5m7xg"/>`,
		"fallback": "at-icons:speaker-mute",
	});
}

export default Component;
