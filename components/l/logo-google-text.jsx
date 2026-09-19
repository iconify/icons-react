import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptb63ubmu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptb63ubmu"/>`,
		"fallback": "f7:logo-google-text",
	});
}

export default Component;
