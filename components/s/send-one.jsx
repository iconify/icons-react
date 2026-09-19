import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/tmwvmdb1b.css';
import '../../css/l/ldk3krbjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="tmwvmdb1b"/><path class="ldk3krbjj"/></g>`,
		"fallback": "icon-park:send-one",
	});
}

export default Component;
