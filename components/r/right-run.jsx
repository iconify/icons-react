import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cej2n11nh.css';
import '../../css/n/n72o_tbtb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA2dqsenI"><g class="wwvp95byt"><path class="cej2n11nh"/><path class="n72o_tbtb"/></g></mask></defs><path mask="url(#SVGA2dqsenI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:right-run",
	});
}

export default Component;
