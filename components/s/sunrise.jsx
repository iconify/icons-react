import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjwqr1b2g.css';
import '../../css/h/hctk37wzh.css';
import '../../css/l/lid4jmbmv.css';
import '../../css/m/mp6row0-y.css';
import '../../css/u/ugu3xyw4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjwqr1b2g wm-k"/><path class="hctk37wzh wm-k"/><path class="lid4jmbmv wm-a"/><path class="mp6row0-y wm-s"/><path class="ugu3xyw4k wm-s"/>`,
		"fallback": "withicons-bauhaus:sunrise",
	});
}

export default Component;
