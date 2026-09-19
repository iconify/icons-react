import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/j3ito7b_n.css';
import '../../css/s/sabn5_cyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="j3ito7b_n"/><path class="sabn5_cyt"/></g>`,
		"fallback": "icon-park:thumbs-down",
	});
}

export default Component;
