import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdjo4sv5r.css';
import '../../css/v/v4mvfkyzo.css';
import '../../css/f/fa1_uabup.css';
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
		"content": `<defs><mask id="SVGcGocJPTs"><g class="ft5dv1b6b"><path class="qdjo4sv5r"/><path class="v4mvfkyzo"/><path class="fa1_uabup"/><circle class="i13dvsb0b"/></g></mask></defs><path mask="url(#SVGcGocJPTs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:slave",
	});
}

export default Component;
