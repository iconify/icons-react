import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2og0bbcd.css';
import '../../css/z/z_eskmbbe.css';
import '../../css/q/qcrfezbia.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeCtwbdKx"><g class="ft5dv1b6b"><path class="z2og0bbcd"/><path class="z_eskmbbe"/><path class="qcrfezbia"/></g></mask></defs><path mask="url(#SVGeCtwbdKx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:mail-download",
	});
}

export default Component;
