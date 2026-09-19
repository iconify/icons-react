import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crrxqfb0f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnTiqDe6y"><path class="crrxqfb0f"/></mask></defs><path mask="url(#SVGnTiqDe6y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two",
	});
}

export default Component;
