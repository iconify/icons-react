import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx50ssb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx50ssb7u"/>`,
		"fallback": "vadivam:list-filter",
	});
}

export default Component;
