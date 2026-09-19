import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsi-nbz9w.css';
import '../../css/x/xpexa2b0b.css';
import '../../css/j/jinb6ibrg.css';
import '../../css/d/doz_8wbio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsi-nbz9w"/><circle class="xpexa2b0b"/><circle class="jinb6ibrg"/><circle class="doz_8wbio"/>`,
		"fallback": "ion:list",
	});
}

export default Component;
