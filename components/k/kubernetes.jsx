import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_h0j5bwz.css';
import '../../css/o/o27nl8m4l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_h0j5bwz"/><path clip-rule="evenodd" class="o27nl8m4l"/>`,
		"fallback": "pajamas:kubernetes",
	});
}

export default Component;
