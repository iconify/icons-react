import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofvt09bqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofvt09bqt"/>`,
		"fallback": "material-icon-theme:license",
	});
}

export default Component;
