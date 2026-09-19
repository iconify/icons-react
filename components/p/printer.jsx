import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/nptj6xa9m.css';
import '../../css/w/w2tgfdchj.css';
import '../../css/l/lua0thbxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="nptj6xa9m"/><path clip-rule="evenodd" class="w2tgfdchj"/><path class="lua0thbxm"/></g>`,
		"fallback": "icon-park:printer",
	});
}

export default Component;
