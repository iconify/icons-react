import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm5-86ulh.css';
import '../../css/e/e_r59eb6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm5-86ulh"/><path class="e_r59eb6y"/>`,
		"fallback": "material-icon-theme:toml",
	});
}

export default Component;
