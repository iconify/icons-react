import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/z6uzejnqn.css';
import '../../css/z/zb3vb8bsq.css';
import '../../css/g/gcbxz4b5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="z6uzejnqn"/><path class="zb3vb8bsq"/><path class="gcbxz4b5g"/></g>`,
		"fallback": "icon-park:rotate",
	});
}

export default Component;
