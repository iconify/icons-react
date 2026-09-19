import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lfug1vb7h.css';
import '../../css/q/q_lxrsbbr.css';
import '../../css/c/c6hc25bua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect transform="rotate(45 34.607 3.494)" class="lfug1vb7h"/><rect transform="rotate(45 16.223 21.879)" class="q_lxrsbbr"/><path class="c6hc25bua"/></g>`,
		"fallback": "icon-park:link-three",
	});
}

export default Component;
