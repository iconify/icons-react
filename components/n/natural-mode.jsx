import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyiy0b4o.css';
import '../../css/x/xvzaotb_b.css';
import '../../css/g/g0av7_f0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9btaWbAY"><g class="blyiy0b4o"><path class="xvzaotb_b"/><path class="g0av7_f0k"/></g></mask></defs><path mask="url(#SVG9btaWbAY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:natural-mode",
	});
}

export default Component;
