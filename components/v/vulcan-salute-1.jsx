import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du-7vpbkh.css';
import '../../css/k/kk_56jxww.css';
import '../../css/e/e12tw0b8p.css';
import '../../css/q/qrrh5951r.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du-7vpbkh"/><path class="kk_56jxww"/><path class="e12tw0b8p"/><path class="qrrh5951r"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:vulcan-salute-1",
	});
}

export default Component;
