import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eozj_aczo.css';
import '../../css/u/u5aprybjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eozj_aczo"/><path class="u5aprybjq"/>`,
		"fallback": "streamline-freehand:layers-bring-backward",
	});
}

export default Component;
