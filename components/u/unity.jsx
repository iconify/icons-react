import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emundtb5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emundtb5k"/>`,
		"fallback": "material-icon-theme:unity",
	});
}

export default Component;
