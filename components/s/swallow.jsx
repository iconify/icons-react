import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/xwpf_4b-e.css';
import '../../css/c/cn0zkf_ax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="xwpf_4b-e"/><path clip-rule="evenodd" class="cn0zkf_ax"/></g>`,
		"fallback": "icon-park:swallow",
	});
}

export default Component;
