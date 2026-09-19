import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-b0m2bdx.css';
import '../../css/m/m7ak63tdr.css';
import '../../css/h/hjqeyxbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-b0m2bdx"/><path class="m7ak63tdr"/><path class="hjqeyxbix"/>`,
		"fallback": "gcp:media-translation-api",
	});
}

export default Component;
