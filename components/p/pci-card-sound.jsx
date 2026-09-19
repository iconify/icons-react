import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-c82bbdh.css';
import '../../css/c/co9ypkbrw.css';
import '../../css/r/r301wefvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-c82bbdh"/><path class="co9ypkbrw"/><path class="r301wefvw"/></g>`,
		"fallback": "bi:pci-card-sound",
	});
}

export default Component;
