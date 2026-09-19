import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/y/yo05b4clt.css';
import '../../css/x/xhfyzfncc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBMoW3ddt"><g class="wqznn1ydc"><path class="yo05b4clt"/><path class="xhfyzfncc"/></g></mask></defs><path mask="url(#SVGBMoW3ddt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:torch",
	});
}

export default Component;
