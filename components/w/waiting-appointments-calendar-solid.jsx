import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1zfn8b1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n1zfn8b1w"/>`,
		"fallback": "streamline:waiting-appointments-calendar-solid",
	});
}

export default Component;
