import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b85kfggca.css';
import '../../css/d/dqv-n8bve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b85kfggca"/><path class="dqv-n8bve"/>`,
		"fallback": "material-icon-theme:taze",
	});
}

export default Component;
