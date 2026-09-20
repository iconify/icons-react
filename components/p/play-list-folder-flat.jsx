import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvsyurbhh.css';
import '../../css/o/o3zk11vph.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yvsyurbhh"/><path class="o3zk11vph"/></g>`,
		"fallback": "streamline-color:play-list-folder-flat",
	});
}

export default Component;
