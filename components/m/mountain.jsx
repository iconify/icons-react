import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/l0xa7qbsw.css';
import '../../css/g/g99d2gzfk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkgL0Mb5o"><g class="v3_i3wktz"><path class="l0xa7qbsw"/><path class="g99d2gzfk"/></g></mask></defs><path mask="url(#SVGkgL0Mb5o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mountain",
	});
}

export default Component;
