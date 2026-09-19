import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e97cal7kt.css';
import '../../css/h/hzgy6wbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="e97cal7kt"/><path class="hzgy6wbai"/></g>`,
		"fallback": "icon-park:mail-open",
	});
}

export default Component;
