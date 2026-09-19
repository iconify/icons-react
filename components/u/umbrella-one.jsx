import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tmj7g6goi.css';
import '../../css/g/gg1lczq6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="tmj7g6goi"/><path class="gg1lczq6x"/></g>`,
		"fallback": "icon-park:umbrella-one",
	});
}

export default Component;
