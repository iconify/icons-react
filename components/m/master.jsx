import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4azcmbmn.css';
import '../../css/m/mlfvy1b-f.css';
import '../../css/m/mma5cub1k.css';
import '../../css/i/i13dvsb0b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6p48Ec4M"><g class="ft5dv1b6b"><path class="j4azcmbmn"/><rect class="mlfvy1b-f"/><path class="mma5cub1k"/><circle class="i13dvsb0b"/></g></mask></defs><path mask="url(#SVG6p48Ec4M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:master",
	});
}

export default Component;
