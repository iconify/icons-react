import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg4rwbchc.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg4rwbchc"/>`,
		"fallback": "octicon:play",
	});
}

export default Component;
