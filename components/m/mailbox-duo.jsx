import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6e7gbb9f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ecfmroazw.css';
import '../../css/z/z183tbbqk.css';
import '../../css/h/hjjz9298x.css';
import '../../css/g/gk5kpeb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6e7gbb9f secondary"/><g class="dt0cm9dhy primary"><path class="ecfmroazw"/><path class="z183tbbqk"/><path class="hjjz9298x"/><path class="gk5kpeb5m"/></g>`,
		"fallback": "iconaut:mailbox-duo",
	});
}

export default Component;
