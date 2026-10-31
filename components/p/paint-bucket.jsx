import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/phhfobc9h.css';
import '../../css/b/b3tsu2bvf.css';
import '../../css/d/dev7jwbdd.css';
import '../../css/a/alup_ibye.css';
import '../../css/c/c9mwe-beg.css';
import '../../css/y/yeh6x5bvv.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="phhfobc9h"/><path class="b3tsu2bvf wm-s"/><path class="dev7jwbdd wm-shine"/><path class="alup_ibye wm-k"/><path class="c9mwe-beg wm-a"/><path class="wm-s yeh6x5bvv"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:paint-bucket",
	});
}

export default Component;
