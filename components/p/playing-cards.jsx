import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/myzafz9oj.css';
import '../../css/r/rofj8bb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="myzafz9oj"/><rect class="rofj8bb8a"/></g>`,
		"fallback": "lucide:playing-cards",
	});
}

export default Component;
