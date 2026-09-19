import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgg8ckxhh.css';
import '../../css/g/g5idr7-ek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEiAW8bBD"><g class="ft5dv1b6b"><path class="xgg8ckxhh"/><path class="g5idr7-ek"/></g></mask></defs><path mask="url(#SVGEiAW8bBD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:radiation",
	});
}

export default Component;
