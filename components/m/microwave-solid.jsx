import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc0url8kw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bc0url8kw"/>`,
		"fallback": "streamline:microwave-solid",
	});
}

export default Component;
