import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjmdefyhd.css';
import '../../css/k/k4tc3yb1h.css';

const viewBox = {"width":256,"height":277};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjmdefyhd"/><path class="k4tc3yb1h"/>`,
		"fallback": "thesvg-color:redwoodjs",
	});
}

export default Component;
