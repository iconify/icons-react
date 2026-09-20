import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b1hrujb-k.css';
import '../../css/r/rjyxz_brk.css';
import '../../css/f/fk6wuudwj.css';
import '../../css/h/hfj0unbqw.css';
import '../../css/r/rhgj955de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="b1hrujb-k"/><path clip-rule="evenodd" class="rjyxz_brk"/><path class="fk6wuudwj"/><path clip-rule="evenodd" class="hfj0unbqw"/><path clip-rule="evenodd" class="rhgj955de"/></g>`,
		"fallback": "thesvg:sora-openai",
	});
}

export default Component;
