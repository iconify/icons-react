import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d476gw_ee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d476gw_ee"/>`,
		"fallback": "icon-park:twitter",
	});
}

export default Component;
