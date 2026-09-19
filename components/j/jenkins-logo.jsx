import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzrkhac7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzrkhac7f"/>`,
		"fallback": "cbi:jenkins-logo",
	});
}

export default Component;
