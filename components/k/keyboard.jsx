import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arj7difgh.css';
import '../../css/d/d9n_kpbfh.css';
import '../../css/n/n08b62aoj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQPlCdath"><g class="ft5dv1b6b"><path class="arj7difgh"/><path clip-rule="evenodd" class="d9n_kpbfh"/><path class="n08b62aoj"/></g></mask></defs><path mask="url(#SVGQPlCdath)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:keyboard",
	});
}

export default Component;
