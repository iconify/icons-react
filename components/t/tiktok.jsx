import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0phr9-d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkWEIQcHM"><path class="ql0phr9-d"/></mask></defs><path mask="url(#SVGkWEIQcHM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tiktok",
	});
}

export default Component;
