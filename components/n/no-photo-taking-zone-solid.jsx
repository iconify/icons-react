import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbtom9bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbtom9bwl"/>`,
		"fallback": "streamline-plump:no-photo-taking-zone-solid",
	});
}

export default Component;
