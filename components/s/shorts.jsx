import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvsrq9-zz.css';
import '../../css/n/nejim4bkm.css';
import '../../css/b/brqjlwv3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jvsrq9-zz"/><path class="nejim4bkm"/><path class="brqjlwv3a"/></g>`,
		"fallback": "icon-park-outline:shorts",
	});
}

export default Component;
