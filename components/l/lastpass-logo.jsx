import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e8i8njv0w.css';
import '../../css/u/ufx6m_bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e8i8njv0w"/><path class="ufx6m_bfo"/></g>`,
		"fallback": "streamline-logos:lastpass-logo",
	});
}

export default Component;
