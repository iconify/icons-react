import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8lp5cx1a.css';
import '../../css/m/m4237cc8k.css';
import '../../css/r/r654q-uhd.css';
import '../../css/t/thhi6b9md.css';
import '../../css/m/msio13ifn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8lp5cx1a"/><circle class="m4237cc8k"/><circle class="r654q-uhd"/><circle class="thhi6b9md"/><circle class="msio13ifn"/>`,
		"fallback": "eos-icons:organization",
	});
}

export default Component;
