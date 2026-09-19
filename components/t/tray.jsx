import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qaw7rbkbp.css';
import '../../css/c/cjkvecb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHRF2iexP"><g class="aql7dnt-u"><rect transform="rotate(45 24.762 3.243)" class="qaw7rbkbp"/><path class="cjkvecb0a"/></g></mask></defs><path mask="url(#SVGHRF2iexP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tray",
	});
}

export default Component;
