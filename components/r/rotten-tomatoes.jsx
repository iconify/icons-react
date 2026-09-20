import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oceqrzbjx.css';
import '../../css/p/p2_f0-rsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oceqrzbjx"/><path class="p2_f0-rsw"/>`,
		"fallback": "selfhst:rotten-tomatoes",
	});
}

export default Component;
