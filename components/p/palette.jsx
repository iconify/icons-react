import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyhpiwoex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyhpiwoex"/>`,
		"fallback": "material-icon-theme:palette",
	});
}

export default Component;
