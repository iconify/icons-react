import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1yuyjz7c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8oel7IvX"><path class="z1yuyjz7c"/></mask></defs><path mask="url(#SVG8oel7IvX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:vertical-tidy-up",
	});
}

export default Component;
