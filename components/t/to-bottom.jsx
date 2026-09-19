import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgzu6kaxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgzu6kaxa"/>`,
		"fallback": "icon-park-outline:to-bottom",
	});
}

export default Component;
