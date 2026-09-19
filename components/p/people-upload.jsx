import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kznc4_ijf.css';
import '../../css/u/uxo98kmzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxf3Vlb0g"><g class="v3_i3wktz"><path class="kznc4_ijf"/><path class="uxo98kmzz"/></g></mask></defs><path mask="url(#SVGxf3Vlb0g)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:people-upload",
	});
}

export default Component;
