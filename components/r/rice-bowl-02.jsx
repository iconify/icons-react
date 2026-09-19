import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ye4fm_b9r.css';
import '../../css/z/z8yx5mbkz.css';
import '../../css/b/b-m5x99nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ye4fm_b9r"/><path class="z8yx5mbkz"/><path class="b-m5x99nb"/></g>`,
		"fallback": "hugeicons:rice-bowl-02",
	});
}

export default Component;
