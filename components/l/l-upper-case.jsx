import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imkwy3-et.css';

const viewBox = {"width":454,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imkwy3-et"/>`,
		"fallback": "ls:l-upper-case",
	});
}

export default Component;
