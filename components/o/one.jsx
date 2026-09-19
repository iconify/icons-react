import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sts20cc0v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5oSYUcve"><path class="sts20cc0v"/></mask></defs><path mask="url(#SVG5oSYUcve)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one",
	});
}

export default Component;
