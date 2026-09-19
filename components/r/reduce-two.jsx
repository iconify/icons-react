import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5ke29wou.css';
import '../../css/r/rftmvky-i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBKRtqbaD"><g class="ft5dv1b6b"><rect class="r5ke29wou"/><path class="rftmvky-i"/></g></mask></defs><path mask="url(#SVGBKRtqbaD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:reduce-two",
	});
}

export default Component;
