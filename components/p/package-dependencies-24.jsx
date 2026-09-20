import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_z_4b0d.css';
import '../../css/e/esp72qa9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1_z_4b0d"/><path class="esp72qa9s"/>`,
		"fallback": "octicon:package-dependencies-24",
	});
}

export default Component;
