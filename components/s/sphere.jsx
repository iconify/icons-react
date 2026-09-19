import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/z9--icb2a.css';
import '../../css/z/zrmeq8vsu.css';
import '../../css/k/kb9zbkb1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="z9--icb2a"/><path class="zrmeq8vsu"/><circle class="kb9zbkb1z"/></g>`,
		"fallback": "icon-park:sphere",
	});
}

export default Component;
