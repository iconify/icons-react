import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbb19kiwf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbb19kiwf"/>`,
		"fallback": "material-icon-theme:nextflow",
	});
}

export default Component;
