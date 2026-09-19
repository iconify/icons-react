import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/j/j3iodsbfd.css';
import '../../css/h/hv36otb5b.css';
import '../../css/k/k86bz2btu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="j3iodsbfd"/><path class="hv36otb5b"/><path class="k86bz2btu"/></g>`,
		"fallback": "icon-park:record-disc",
	});
}

export default Component;
