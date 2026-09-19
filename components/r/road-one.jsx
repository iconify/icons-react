import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l762c7evl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l762c7evl"/>`,
		"fallback": "icon-park-outline:road-one",
	});
}

export default Component;
