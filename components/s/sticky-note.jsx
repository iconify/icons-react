import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-018mx1x.css';
import '../../css/x/xoollor0t.css';
import '../../css/d/dn5423bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-018mx1x wm-k"/><path class="wm-k xoollor0t"/><path class="dn5423bcn wm-a"/>`,
		"fallback": "withicons-bauhaus:sticky-note",
	});
}

export default Component;
