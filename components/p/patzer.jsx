import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlrdzybyn.css';
import '../../css/y/yjo15eh2h.css';
import '../../css/z/z5-xgab6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlrdzybyn"/><path class="yjo15eh2h"/><path class="z5-xgab6h"/>`,
		"fallback": "selfhst:patzer",
	});
}

export default Component;
