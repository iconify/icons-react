import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_zaf_bhe.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_zaf_bhe"/>`,
		"fallback": "fa6-solid:sitemap",
	});
}

export default Component;
