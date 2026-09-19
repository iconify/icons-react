import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zfnienbkn.css';
import '../../css/v/v3q5wob3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG544unEnd"><g class="ylrso7y3c"><path class="zfnienbkn"/><path class="v3q5wob3k"/></g></mask></defs><path mask="url(#SVG544unEnd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:preview-open",
	});
}

export default Component;
