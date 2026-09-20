import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk9zn-beg.css';
import '../../css/o/o9cgf80vg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk9zn-beg"/><path class="o9cgf80vg"/>`,
		"fallback": "selfhst:rauthy-dark",
	});
}

export default Component;
