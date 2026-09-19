import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cjt-mmb4n.css';
import '../../css/m/m_c0q_37i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cjt-mmb4n"/><path class="m_c0q_37i"/></g>`,
		"fallback": "hugeicons:tiff-02",
	});
}

export default Component;
