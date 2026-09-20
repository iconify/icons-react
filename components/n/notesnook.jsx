import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7vo4nbxw.css';
import '../../css/x/x9vltugms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7vo4nbxw"/><path class="x9vltugms"/>`,
		"fallback": "selfhst:notesnook",
	});
}

export default Component;
