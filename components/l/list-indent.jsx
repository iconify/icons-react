import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r24wu-b6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r24wu-b6g"/>`,
		"fallback": "pajamas:list-indent",
	});
}

export default Component;
