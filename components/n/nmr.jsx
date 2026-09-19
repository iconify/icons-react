import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/j/j49yvvine.css';
import '../../css/f/f1y5_3bxi.css';
import '../../css/y/y72c0qhnk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNXa3Ldld"><g class="rohhhzb0l"><path class="vkcj4bcdm"/><path class="j49yvvine"/><path class="f1y5_3bxi"/><path class="y72c0qhnk"/></g></mask></defs><path mask="url(#SVGNXa3Ldld)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nmr",
	});
}

export default Component;
