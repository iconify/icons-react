import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6id_b8os.css';
import '../../css/g/g-29xb7vu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6id_b8os"/><path class="g-29xb7vu"/>`,
		"fallback": "energy-icons:voicemail-48",
	});
}

export default Component;
