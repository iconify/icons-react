import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9p7t_bdb.css';
import '../../css/c/cedmezvjn.css';
import '../../css/y/y6jp-zu0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e9p7t_bdb"/><path class="cedmezvjn"/><path class="y6jp-zu0j"/></g>`,
		"fallback": "streamline-ultimate:warehouse-storage-2",
	});
}

export default Component;
