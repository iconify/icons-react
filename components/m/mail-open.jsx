import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hihlctbwv.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGz8UWde7M"><g class="v3_i3wktz"><path class="hihlctbwv"/><path class="hvzd0ubol"/></g></mask></defs><path mask="url(#SVGz8UWde7M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail-open",
	});
}

export default Component;
