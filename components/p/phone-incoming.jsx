import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/ahakhtqfj.css';
import '../../css/a/a17suvc_q.css';
import '../../css/b/bv5qnrbtv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ahakhtqfj"/><path class="a17suvc_q"/><path class="bv5qnrbtv"/></g>`,
		"fallback": "icon-park:phone-incoming",
	});
}

export default Component;
