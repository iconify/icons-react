import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6tltb6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz6tltb6g"/>`,
		"fallback": "codicon:layout-panel-justify",
	});
}

export default Component;
