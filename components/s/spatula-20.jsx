import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmp784cfc.css';
import '../../css/d/d6khf1dib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmp784cfc"/><path class="d6khf1dib"/>`,
		"fallback": "energy-icons:spatula-20",
	});
}

export default Component;
