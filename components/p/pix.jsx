import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoibcycal.css';
import '../../css/r/rewt-b9oy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoibcycal"/><path class="rewt-b9oy"/>`,
		"fallback": "nimbus:pix",
	});
}

export default Component;
