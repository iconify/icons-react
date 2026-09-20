import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8qs6vbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8qs6vbsh"/>`,
		"fallback": "streamline-sharp-color:paragraph-article-flat",
	});
}

export default Component;
