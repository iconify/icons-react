import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j2y70bssr.css';
import '../../css/z/zfouoybeb.css';
import '../../css/c/c8tjlaclr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGe7ggsQXr"><g class="aql7dnt-u"><path class="j2y70bssr"/><path class="zfouoybeb"/><path class="c8tjlaclr"/></g></mask></defs><path mask="url(#SVGe7ggsQXr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lotion",
	});
}

export default Component;
