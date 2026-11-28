import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anu_i_-lk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anu_i_-lk"/>`,
		"fallback": "pinhead:utility-valve-beside-sewage-pipe-cross-section",
	});
}

export default Component;
