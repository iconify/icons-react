import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/q_fzk6ijs.css';
import '../../css/v/vb9_1lbgt.css';
import '../../css/w/w64ndbcxx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHYfQmdvP"><g class="s9cl3zbei"><path clip-rule="evenodd" class="q_fzk6ijs"/><path class="vb9_1lbgt"/><path class="w64ndbcxx"/></g></mask></defs><path mask="url(#SVGHYfQmdvP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:prescription",
	});
}

export default Component;
