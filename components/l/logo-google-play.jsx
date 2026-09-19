import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_-jwob6s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_-jwob6s"/>`,
		"fallback": "gravity-ui:logo-google-play",
	});
}

export default Component;
