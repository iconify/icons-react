import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5idgqqvy.css';
import '../../css/l/lyz0avnlk.css';
import '../../css/m/m_a345b5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5idgqqvy"/><path class="lyz0avnlk"/><path class="m_a345b5y"/>`,
		"fallback": "energy-icons:phone-incoming-48-bold",
	});
}

export default Component;
