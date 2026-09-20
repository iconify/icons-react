import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gz2w8aczl.css';
import '../../css/x/xfbzf_83e.css';
import '../../css/l/lwfontb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="gz2w8aczl"/><path class="xfbzf_83e"/><path class="lwfontb6j"/></g>`,
		"fallback": "streamline-logos:livejournal-logo",
	});
}

export default Component;
