import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vikf1-blz.css';
import '../../css/n/nt60jabuq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vikf1-blz"/><path class="nt60jabuq"/>`,
		"fallback": "ei:sc-odnoklassniki",
	});
}

export default Component;
