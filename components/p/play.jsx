import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/f/f6px4o6ug.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOVEmxbON"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="f6px4o6ug"/></g></mask></defs><path mask="url(#SVGOVEmxbON)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:play",
	});
}

export default Component;
