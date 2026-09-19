import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nts37w2-y.css';
import '../../css/i/ir8prxc9v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFo46TdoW"><g class="v3_i3wktz"><path class="nts37w2-y"/><path class="ir8prxc9v"/></g></mask></defs><path mask="url(#SVGFo46TdoW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:notes",
	});
}

export default Component;
