import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijlxw4awb.css';
import '../../css/w/wru1txnso.css';
import '../../css/z/za3b9rblf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijlxw4awb"/><path class="wru1txnso"/><path class="za3b9rblf"/>`,
		"fallback": "material-icon-theme:textlint",
	});
}

export default Component;
