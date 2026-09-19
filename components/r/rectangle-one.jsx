import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm8hnqbnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm8hnqbnq"/>`,
		"fallback": "icon-park-outline:rectangle-one",
	});
}

export default Component;
