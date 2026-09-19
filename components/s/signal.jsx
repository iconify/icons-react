import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au6ph-b7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au6ph-b7y"/>`,
		"fallback": "icon-park-outline:signal",
	});
}

export default Component;
