import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/ngf5ytuky.css';
import '../../css/d/d42z9i18m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ngf5ytuky"/><path class="d42z9i18m"/></g>`,
		"fallback": "streamline-logos:pixabay-logo",
	});
}

export default Component;
