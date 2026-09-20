import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w0ersef7o.css';
import '../../css/g/gob-zac-j.css';
import '../../css/t/tgdxgfbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="w0ersef7o"/><path class="gob-zac-j"/><path clip-rule="evenodd" class="tgdxgfbvv"/></g>`,
		"fallback": "streamline-logos:uplabs-logo",
	});
}

export default Component;
