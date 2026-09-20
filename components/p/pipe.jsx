import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqp_ve-xg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqp_ve-xg"/>`,
		"fallback": "pinhead:pipe",
	});
}

export default Component;
