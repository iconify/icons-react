import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/t45w3cbwe.css';
import '../../css/f/fpx-00njb.css';
import '../../css/p/ps_jx5b8q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG06LOWdxz"><g class="s9cl3zbei"><path class="t45w3cbwe"/><circle class="fpx-00njb"/><circle class="ps_jx5b8q"/></g></mask></defs><path mask="url(#SVG06LOWdxz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medal-one",
	});
}

export default Component;
