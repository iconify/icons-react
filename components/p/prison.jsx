import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/q/qnx6idjmr.css';
import '../../css/w/wgbgurmsp.css';
import '../../css/h/hgrrm0nzr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkQ0mucVk"><g class="hv130ab-t"><path class="qnx6idjmr"/><path class="wgbgurmsp"/><path class="hgrrm0nzr"/></g></mask></defs><path mask="url(#SVGkQ0mucVk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:prison",
	});
}

export default Component;
