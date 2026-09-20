import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl61zdbbv.css';
import '../../css/d/doeps1g-t.css';
import '../../css/z/zr8jw-s_z.css';
import '../../css/n/nn73j2b3w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl61zdbbv"/><path clip-rule="evenodd" class="doeps1g-t"/><path class="zr8jw-s_z"/><path clip-rule="evenodd" class="nn73j2b3w"/></g>`,
		"fallback": "streamline-plump-color:pork-meat-flat",
	});
}

export default Component;
