import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gko5i1byl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gko5i1byl"/>`,
		"fallback": "icon-park-outline:people-delete-one",
	});
}

export default Component;
