import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkv8d4byc.css';
import '../../css/d/d5ynaeb2l.css';
import '../../css/m/mx9ehddmk.css';
import '../../css/m/m2jmnq7zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkv8d4byc"/><path class="d5ynaeb2l"/><path class="mx9ehddmk"/><path class="m2jmnq7zl"/></g>`,
		"fallback": "andrsrxn:screen-share-warning",
	});
}

export default Component;
