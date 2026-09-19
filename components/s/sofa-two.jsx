import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfjz56b-b.css';
import '../../css/v/vhmqj7bwp.css';
import '../../css/r/rhfc70guf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG89Y2hdoo"><g class="ft5dv1b6b"><path class="zfjz56b-b"/><path class="vhmqj7bwp"/><path clip-rule="evenodd" class="rhfc70guf"/></g></mask></defs><path mask="url(#SVG89Y2hdoo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sofa-two",
	});
}

export default Component;
