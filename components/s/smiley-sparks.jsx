import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/a/a1v1mv8wj.css';
import '../../css/w/winlt7dii.css';
import '../../css/p/p6pl2pbbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="a1v1mv8wj"/><path class="winlt7dii"/><path class="p6pl2pbbt"/></g>`,
		"fallback": "streamline-plump:smiley-sparks",
	});
}

export default Component;
