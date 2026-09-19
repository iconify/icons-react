import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zsyk_j46v.css';
import '../../css/s/si-nqabns.css';
import '../../css/d/dkfj0ub_t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlANxqehJ"><g class="hv130ab-t"><path class="zsyk_j46v"/><path class="si-nqabns"/><path class="dkfj0ub_t"/></g></mask></defs><path mask="url(#SVGlANxqehJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ticket",
	});
}

export default Component;
