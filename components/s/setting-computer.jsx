import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/hq5j0kbho.css';
import '../../css/n/nkrk9ac5v.css';
import '../../css/i/iug4c3bzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLvgHDdTU"><g class="rohhhzb0l"><path class="hq5j0kbho"/><circle class="nkrk9ac5v"/><path class="iug4c3bzv"/></g></mask></defs><path mask="url(#SVGLvgHDdTU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:setting-computer",
	});
}

export default Component;
