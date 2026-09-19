import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmujmvhfy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9BO8tGmC"><path class="nmujmvhfy"/></mask></defs><path mask="url(#SVG9BO8tGmC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tool",
	});
}

export default Component;
