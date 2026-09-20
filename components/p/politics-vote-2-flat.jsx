import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et4n23bxf.css';
import '../../css/w/wpy2ibbvy.css';
import '../../css/s/sw6whzz-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="et4n23bxf"/><path class="wpy2ibbvy"/><path clip-rule="evenodd" class="sw6whzz-k"/></g>`,
		"fallback": "streamline-color:politics-vote-2-flat",
	});
}

export default Component;
