import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhlkhxbii.css';
import '../../css/b/bp4av50wq.css';
import '../../css/s/soawemmgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhlkhxbii"/><path class="bp4av50wq"/><path class="soawemmgw"/>`,
		"fallback": "selfhst:ksuite-swisstransfer-dark",
	});
}

export default Component;
