import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n4ox84buf.css';
import '../../css/y/yzv3l5g3i.css';
import '../../css/a/a5qmfbb0q.css';
import '../../css/x/x24d_rjaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="n4ox84buf"/><path class="yzv3l5g3i"/><path class="a5qmfbb0q"/><path class="x24d_rjaf"/></g>`,
		"fallback": "icon-park:shake",
	});
}

export default Component;
