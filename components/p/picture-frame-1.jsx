import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/o6jw4gbeq.css';
import '../../css/q/q7_poyshi.css';
import '../../css/i/i02asrbug.css';
import '../../css/g/gfcuh4bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="o6jw4gbeq"/><path class="q7_poyshi"/><path class="i02asrbug"/><path class="gfcuh4bqq"/></g>`,
		"fallback": "streamline-cyber:picture-frame-1",
	});
}

export default Component;
