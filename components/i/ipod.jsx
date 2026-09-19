import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_6rmtujx.css';
import '../../css/x/xmy0diffs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_6rmtujx"/><path class="xmy0diffs"/>`,
		"fallback": "ion:ipod",
	});
}

export default Component;
