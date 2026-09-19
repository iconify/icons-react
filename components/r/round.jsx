import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2stgebyp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4yRl9bjc"><circle class="z2stgebyp"/></mask></defs><path mask="url(#SVG4yRl9bjc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:round",
	});
}

export default Component;
