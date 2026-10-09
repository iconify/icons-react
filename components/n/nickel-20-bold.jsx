import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkwxxqb3q.css';
import '../../css/h/hpui6-m_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkwxxqb3q"/><path class="hpui6-m_s"/>`,
		"fallback": "energy-icons:nickel-20-bold",
	});
}

export default Component;
