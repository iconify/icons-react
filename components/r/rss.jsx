import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ift6jxb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ift6jxb2w"/>`,
		"fallback": "grommet-icons:rss",
	});
}

export default Component;
