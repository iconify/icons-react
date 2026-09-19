import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d9ti0tfzb.css';
import '../../css/w/wjxv5acdy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnujFrm8B"><g class="v3_i3wktz"><path class="d9ti0tfzb"/><path class="wjxv5acdy"/></g></mask></defs><path mask="url(#SVGnujFrm8B)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:selected",
	});
}

export default Component;
