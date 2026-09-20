import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/doi15pahr.css';
import '../../css/j/jn_t2lbtj.css';
import '../../css/i/i4f-v7blm.css';
import '../../css/n/n5t4oebmh.css';
import '../../css/n/nvyrptbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="doi15pahr"/><path class="jn_t2lbtj"/><path class="i4f-v7blm"/><path class="n5t4oebmh"/><path class="nvyrptbqt"/></g>`,
		"fallback": "streamline-ultimate-color:temperature-thermometer-high",
	});
}

export default Component;
