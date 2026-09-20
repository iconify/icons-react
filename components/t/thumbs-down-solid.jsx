import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o17_47bif.css';
import '../../css/z/zfos0tbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o17_47bif"/><path class="zfos0tbbt"/></g>`,
		"fallback": "nrk:thumbs-down-solid",
	});
}

export default Component;
