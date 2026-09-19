import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ygz7ebcej.css';
import '../../css/z/zx_6j6b3b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtszk6bSu"><g class="v3_i3wktz"><path class="ygz7ebcej"/><path class="zx_6j6b3b"/></g></mask></defs><path mask="url(#SVGtszk6bSu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:voicemail",
	});
}

export default Component;
