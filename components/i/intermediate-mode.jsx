import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr87l5bdb.css';
import '../../css/y/ymshcybtb.css';
import '../../css/a/ayje7ibqv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTq48RdTj"><g class="lr87l5bdb"><path class="ymshcybtb"/><path class="ayje7ibqv"/></g></mask></defs><path mask="url(#SVGTq48RdTj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:intermediate-mode",
	});
}

export default Component;
