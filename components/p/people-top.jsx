import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4g7cd22t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4g7cd22t"/>`,
		"fallback": "icon-park-outline:people-top",
	});
}

export default Component;
