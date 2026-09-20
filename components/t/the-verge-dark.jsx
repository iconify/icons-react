import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8owapquf.css';
import '../../css/n/n5dg8triv.css';
import '../../css/l/lz13cdsdt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8owapquf"/><path class="n5dg8triv"/><path class="lz13cdsdt"/>`,
		"fallback": "selfhst:the-verge-dark",
	});
}

export default Component;
