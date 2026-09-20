import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idsx4vb9j.css';
import '../../css/l/li7u4ccwd.css';

const viewBox = {"width":256,"height":283};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idsx4vb9j"/><path class="li7u4ccwd"/>`,
		"fallback": "thesvg-color:jest",
	});
}

export default Component;
