import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5wwf8b9k.css';

const viewBox = {"width":149,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5wwf8b9k"/>`,
		"fallback": "thesvg-color:tecno",
	});
}

export default Component;
