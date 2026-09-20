import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfe-pzb2c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfe-pzb2c"/>`,
		"fallback": "pinhead:person-wearing-scuba-gear-diving-under-water",
	});
}

export default Component;
