import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lb6btw-nh.css';
import '../../css/m/mza0vib7z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8OMmXcdh"><g class="aql7dnt-u"><path class="lb6btw-nh"/><path class="mza0vib7z"/></g></mask></defs><path mask="url(#SVG8OMmXcdh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stickers",
	});
}

export default Component;
