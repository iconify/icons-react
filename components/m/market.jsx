import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvq1evy_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jvq1evy_s"/>`,
		"fallback": "icon-park-outline:market",
	});
}

export default Component;
