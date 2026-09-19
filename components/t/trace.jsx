import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gqt8-qbzw.css';
import '../../css/n/n__k3zkmj.css';
import '../../css/g/gufqzrbqo.css';
import '../../css/j/j94ttjdnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="gqt8-qbzw"/><path class="n__k3zkmj"/><path class="gufqzrbqo"/><path class="j94ttjdnc"/></g>`,
		"fallback": "icon-park:trace",
	});
}

export default Component;
