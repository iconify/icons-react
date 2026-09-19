import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icp5j9l8z.css';
import '../../css/a/ax3lcr7bz.css';
import '../../css/i/im_4qkbfu.css';
import '../../css/f/f6ry3nbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGULNDcZJ"><g class="ft5dv1b6b"><path class="icp5j9l8z"/><path class="ax3lcr7bz"/><path clip-rule="evenodd" class="im_4qkbfu"/><path class="f6ry3nbeq"/></g></mask></defs><path mask="url(#SVGGULNDcZJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:virtual-reality-glasses",
	});
}

export default Component;
