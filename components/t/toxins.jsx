import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g-g8_3lxs.css';
import '../../css/i/ioqq5abex.css';
import '../../css/f/fsoi-q3pn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzvgk7cVf"><g class="ufeehvblu"><path clip-rule="evenodd" class="g-g8_3lxs"/><path class="ioqq5abex"/><path class="fsoi-q3pn"/></g></mask></defs><path mask="url(#SVGzvgk7cVf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:toxins",
	});
}

export default Component;
