import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfv3ot-fd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfv3ot-fd"/>`,
		"fallback": "pajamas:issue-type-requirements",
	});
}

export default Component;
