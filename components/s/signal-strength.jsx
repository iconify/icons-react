import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ue81mlbze.css';
import '../../css/z/zdg9yvbsx.css';
import '../../css/k/k29yudf0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdMjhMbPE"><g class="ft5dv1b6b"><path class="ue81mlbze"/><path class="zdg9yvbsx"/><path class="k29yudf0l"/></g></mask></defs><path mask="url(#SVGdMjhMbPE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:signal-strength",
	});
}

export default Component;
