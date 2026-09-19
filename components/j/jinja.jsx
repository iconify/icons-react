import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a69wlg18g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a69wlg18g"/>`,
		"fallback": "catppuccin:jinja",
	});
}

export default Component;
