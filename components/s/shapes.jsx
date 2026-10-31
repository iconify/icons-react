import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uqc94-bsq.css';
import '../../css/g/gxdjyobdd.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';
import '../../css/o/o3v7diy0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uqc94-bsq"/><path class="gxdjyobdd wm-shine"/><path class="n5z9vnbeb wm-k"/><path class="wm-a x9x785x5y"/><path class="o3v7diy0x wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shapes",
	});
}

export default Component;
