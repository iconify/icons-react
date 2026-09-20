import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilqa1rbjm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ilqa1rbjm"/>`,
		"fallback": "ix:table-add-column-right",
	});
}

export default Component;
