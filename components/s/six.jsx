import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh8js1bkv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVm4YwdnW"><path class="xh8js1bkv"/></mask></defs><path mask="url(#SVGVm4YwdnW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:six",
	});
}

export default Component;
