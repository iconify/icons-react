import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he8gb17ry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he8gb17ry"/>`,
		"fallback": "streamline-plump:page-setting-remix",
	});
}

export default Component;
