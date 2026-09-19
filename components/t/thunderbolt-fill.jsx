import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykg2bgbzs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykg2bgbzs"/>`,
		"fallback": "gravity-ui:thunderbolt-fill",
	});
}

export default Component;
