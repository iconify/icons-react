import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkac_gbto.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkac_gbto"/>`,
		"fallback": "material-icon-theme:mdx",
	});
}

export default Component;
