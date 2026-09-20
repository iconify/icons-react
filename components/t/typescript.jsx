import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_6l-rb6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_6l-rb6f"/>`,
		"fallback": "material-icon-theme:typescript",
	});
}

export default Component;
