import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqh7-ab3f.css';

const viewBox = {"width":18,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqh7-ab3f"/>`,
		"fallback": "material-icon-theme:meson",
	});
}

export default Component;
