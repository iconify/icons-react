import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq42nebwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq42nebwn"/>`,
		"fallback": "sidekickicons:microphone-slash-16-solid",
	});
}

export default Component;
