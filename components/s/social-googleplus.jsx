import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3f2lt1bs.css';
import '../../css/x/x720oqwne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3f2lt1bs"/><path class="x720oqwne"/>`,
		"fallback": "ion:social-googleplus",
	});
}

export default Component;
