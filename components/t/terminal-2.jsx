import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pmh84ibxw.css';
import '../../css/l/lyczbl69f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pmh84ibxw"/><path class="lyczbl69f"/></g>`,
		"fallback": "tabler:terminal-2",
	});
}

export default Component;
