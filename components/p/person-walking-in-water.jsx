import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yosf0_bpe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yosf0_bpe"/>`,
		"fallback": "pinhead:person-walking-in-water",
	});
}

export default Component;
