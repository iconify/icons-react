import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aje1gjofx.css';
import '../../css/z/z2xdwcchy.css';
import '../../css/o/o-9st-ttp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aje1gjofx"/><path class="z2xdwcchy"/><path class="o-9st-ttp"/>`,
		"fallback": "ion:server-sharp",
	});
}

export default Component;
