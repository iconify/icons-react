import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amp1qmb0a.css';
import '../../css/s/sgi4nb-bk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amp1qmb0a"/><path class="sgi4nb-bk"/>`,
		"fallback": "selfhst:nicotine-plus",
	});
}

export default Component;
