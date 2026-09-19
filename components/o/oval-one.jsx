import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz1736cer.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG68bY5cqX"><ellipse class="wz1736cer"/></mask></defs><path mask="url(#SVG68bY5cqX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:oval-one",
	});
}

export default Component;
