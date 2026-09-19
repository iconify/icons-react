import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iln50bcxa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iln50bcxa"/>`,
		"fallback": "gravity-ui:microphone-slash",
	});
}

export default Component;
