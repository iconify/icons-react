import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th3k4si2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOOU2tccc"><path class="th3k4si2y"/></mask></defs><path mask="url(#SVGOOU2tccc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ulikecam",
	});
}

export default Component;
