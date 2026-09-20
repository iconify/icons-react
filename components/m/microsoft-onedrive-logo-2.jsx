import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q6j_fmbzy.css';
import '../../css/b/bh3vf9b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="q6j_fmbzy"/><path class="bh3vf9b0m"/></g>`,
		"fallback": "streamline-logos:microsoft-onedrive-logo-2",
	});
}

export default Component;
