import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7wgucbag.css';
import '../../css/b/b5e4p7bqw.css';
import '../../css/j/jr1ppjbei.css';
import '../../css/g/g14ipurrp.css';
import '../../css/d/dsy8kl1ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v7wgucbag"/><circle class="b5e4p7bqw"/><circle class="jr1ppjbei"/><circle class="g14ipurrp"/><path class="dsy8kl1ak"/></g>`,
		"fallback": "evicons:plug-mcs",
	});
}

export default Component;
