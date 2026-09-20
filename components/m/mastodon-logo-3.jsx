import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/ijrufsb5z.css';
import '../../css/i/izwr3413l.css';
import '../../css/a/aq8sr1bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="ijrufsb5z"/><path class="izwr3413l"/><path class="aq8sr1bsj"/></g>`,
		"fallback": "streamline-logos:mastodon-logo-3",
	});
}

export default Component;
