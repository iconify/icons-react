import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydwt8bbeh.css';
import '../../css/x/x5xtfzb4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ydwt8bbeh"/><path class="x5xtfzb4f"/>`,
		"fallback": "selfhst:librephotos",
	});
}

export default Component;
