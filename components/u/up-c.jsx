import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/k/ka8m53b1q.css';
import '../../css/w/w-gz11o7m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWNM29dVN"><g class="rohhhzb0l"><path clip-rule="evenodd" class="vkcj4bcdm"/><path class="ka8m53b1q"/><path class="w-gz11o7m"/></g></mask></defs><path mask="url(#SVGWNM29dVN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:up-c",
	});
}

export default Component;
