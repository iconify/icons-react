import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oc5uaqbqo.css';
import '../../css/b/bfn8tvbyi.css';
import '../../css/z/zn0xucbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oc5uaqbqo"/><path class="bfn8tvbyi"/><path class="zn0xucbql"/></g>`,
		"fallback": "tabler:s-turn-left",
	});
}

export default Component;
