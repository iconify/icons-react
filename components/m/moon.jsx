import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7jxwvbhs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1x4zrmde"><path class="x7jxwvbhs"/></mask></defs><path mask="url(#SVG1x4zrmde)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:moon",
	});
}

export default Component;
