import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcruq_b4u.css';
import '../../css/l/l3mikie3t.css';
import '../../css/v/vnl18uiss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcruq_b4u"/><path class="l3mikie3t"/><path class="vnl18uiss"/>`,
		"fallback": "energy-icons:package-48",
	});
}

export default Component;
