import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kti7wod0f.css';
import '../../css/b/b2126bb3z.css';
import '../../css/p/pet3n157a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kti7wod0f"/><path class="b2126bb3z"/><path class="pet3n157a"/>`,
		"fallback": "eos-icons:iot",
	});
}

export default Component;
