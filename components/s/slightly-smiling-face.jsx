import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xo048r81s.css';
import '../../css/v/vn_89gbyq.css';
import '../../css/b/b4jtc2s1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="xo048r81s"/><path class="vn_89gbyq"/><path class="b4jtc2s1i"/></g>`,
		"fallback": "icon-park:slightly-smiling-face",
	});
}

export default Component;
