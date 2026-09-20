import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aienk9a9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aienk9a9s"/>`,
		"fallback": "pajamas:template",
	});
}

export default Component;
