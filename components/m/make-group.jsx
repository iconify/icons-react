import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wduwcxs0o.css';
import '../../css/s/srcmp7bbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wduwcxs0o"/><path class="srcmp7bbo"/>`,
		"fallback": "icomoon-free:make-group",
	});
}

export default Component;
