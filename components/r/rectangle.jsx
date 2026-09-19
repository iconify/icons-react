import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9ga5g8gl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7t90jevq"><path class="f9ga5g8gl"/></mask></defs><path mask="url(#SVG7t90jevq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rectangle",
	});
}

export default Component;
