import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7m_-rsmc.css';
import '../../css/n/n5um080gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7m_-rsmc"/><path class="n5um080gu"/>`,
		"fallback": "selfhst:vertigo-comics-light",
	});
}

export default Component;
