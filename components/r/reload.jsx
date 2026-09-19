import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/olsnk6fpy.css';
import '../../css/z/z9wgtxbsj.css';
import '../../css/f/fpixpmx3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="olsnk6fpy"/><path class="z9wgtxbsj"/><path class="fpixpmx3x"/></g>`,
		"fallback": "icon-park:reload",
	});
}

export default Component;
