import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p22nvzbrb.css';
import '../../css/b/b2249gzmx.css';
import '../../css/g/giwlvbxak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p22nvzbrb"/><path class="b2249gzmx"/><path class="giwlvbxak"/>`,
		"fallback": "streamline-ultimate:newspaper-fold-bold",
	});
}

export default Component;
