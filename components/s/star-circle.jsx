import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xuh7znbmb.css';
import '../../css/i/iyfuk0bxi.css';
import '../../css/a/a3a7kvl8j.css';
import '../../css/y/y68jbfbua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xuh7znbmb"/><path class="iyfuk0bxi"/><path class="a3a7kvl8j"/><path class="y68jbfbua"/></g>`,
		"fallback": "streamline-plump-color:star-circle",
	});
}

export default Component;
