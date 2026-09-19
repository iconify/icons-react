import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tar6cn05y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tar6cn05y"/>`,
		"fallback": "icon-park-outline:preview-close-one",
	});
}

export default Component;
