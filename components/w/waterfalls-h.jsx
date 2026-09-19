import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoc91eerl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGr4OnveXX"><path class="aoc91eerl"/></mask></defs><path mask="url(#SVGr4OnveXX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:waterfalls-h",
	});
}

export default Component;
