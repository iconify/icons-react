import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/ft678ebrf.css';
import '../../css/i/i381ehb9p.css';
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
		"content": `<defs><mask id="SVGeypeedjE"><g class="v3_i3wktz"><path class="ft678ebrf"/><path class="i381ehb9p"/><path class="y0qmgo4nn"/></g></mask></defs><path mask="url(#SVGeypeedjE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:list-bottom",
	});
}

export default Component;
