import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/f/f8ce6t1vq.css';
import '../../css/k/kzx7z1bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="h_tsn8bxt"/><circle class="f8ce6t1vq"/><path class="kzx7z1bpv"/></g>`,
		"fallback": "iconamoon:music-album-light",
	});
}

export default Component;
