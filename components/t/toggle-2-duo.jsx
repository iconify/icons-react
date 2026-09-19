import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nb23tyfhv.css';
import '../../css/y/ywir2hbst.css';
import '../../css/k/k2kfsbcgf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nb23tyfhv"/><path class="ywir2hbst"/><path class="k2kfsbcgf"/></g>`,
		"fallback": "glyphs:toggle-2-duo",
	});
}

export default Component;
