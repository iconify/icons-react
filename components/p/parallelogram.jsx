import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obqvyrbyx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1L9OFezd"><path class="obqvyrbyx"/></mask></defs><path mask="url(#SVG1L9OFezd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:parallelogram",
	});
}

export default Component;
