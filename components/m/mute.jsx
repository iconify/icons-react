import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/n/nxfle3bpy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVqHvtbBk"><g class="ylrso7y3c"><path class="vkcj4bcdm"/><path class="nxfle3bpy"/></g></mask></defs><path mask="url(#SVGVqHvtbBk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mute",
	});
}

export default Component;
