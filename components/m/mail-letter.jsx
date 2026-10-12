import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7dh059pd.css';
import '../../css/z/ztstzibly.css';
import '../../css/s/spbxfpjqf.css';
import '../../css/l/lgalliejm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v7dh059pd"/><path class="ztstzibly"/><path class="spbxfpjqf"/><path class="lgalliejm"/></g>`,
		"fallback": "andrsrxn:mail-letter",
	});
}

export default Component;
