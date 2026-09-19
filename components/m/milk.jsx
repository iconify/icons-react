import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/f/f0n0gx_qb.css';
import '../../css/w/wh9t1nbgu.css';
import '../../css/m/mikgwbcri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEfrn2wlD"><g class="wwvp95byt"><path class="f0n0gx_qb"/><path class="wh9t1nbgu"/><path class="mikgwbcri"/></g></mask></defs><path mask="url(#SVGEfrn2wlD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:milk",
	});
}

export default Component;
