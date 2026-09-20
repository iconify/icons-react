import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgje56boo.css';
import '../../css/y/ymxiy1_5f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgje56boo"/><path class="ymxiy1_5f"/>`,
		"fallback": "octicon:project-check-16",
	});
}

export default Component;
