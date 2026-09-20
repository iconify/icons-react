import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4otdk7by.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4otdk7by"/>`,
		"fallback": "pinhead:person-boarding-taxi",
	});
}

export default Component;
