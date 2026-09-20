import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2hvsnj5w.css';
import '../../css/k/k55q6hbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2hvsnj5w"/><path class="k55q6hbth"/>`,
		"fallback": "streamline-ultimate:stamps-image-bold",
	});
}

export default Component;
