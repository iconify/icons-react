import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/e/etzb_tbee.css';
import '../../css/c/c-eyj5b4k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOt6pGbyw"><g class="ylrso7y3c"><rect class="etzb_tbee"/><path class="c-eyj5b4k"/></g></mask></defs><path mask="url(#SVGOt6pGbyw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play-two",
	});
}

export default Component;
