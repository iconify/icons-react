import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/ak4zbabmr.css';
import '../../css/m/m0fuevbpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ak4zbabmr"/><path class="m0fuevbpm"/></g>`,
		"fallback": "icon-park:thumbs-up",
	});
}

export default Component;
