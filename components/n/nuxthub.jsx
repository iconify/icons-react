import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxeyuembw.css';

const viewBox = {"width":49,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxeyuembw"/>`,
		"fallback": "thesvg-color:nuxthub",
	});
}

export default Component;
