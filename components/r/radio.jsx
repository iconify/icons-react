import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f599r80rj.css';
import '../../css/b/bk-69btoc.css';
import '../../css/s/ssmn4nbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f599r80rj"/><path class="bk-69btoc"/><path clip-rule="evenodd" class="ssmn4nbmw"/></g>`,
		"fallback": "nrk:radio",
	});
}

export default Component;
