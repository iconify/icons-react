import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n6ohdwn_k.css';
import '../../css/r/rqjfppbsd.css';
import '../../css/y/y0qmgo4nn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYbLVBdom"><g class="v3_i3wktz"><path class="n6ohdwn_k"/><path class="rqjfppbsd"/><path class="y0qmgo4nn"/></g></mask></defs><path mask="url(#SVGYbLVBdom)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-middle",
	});
}

export default Component;
