import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dls8sbjqy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dls8sbjqy"/>`,
		"fallback": "material-icon-theme:tsdoc",
	});
}

export default Component;
