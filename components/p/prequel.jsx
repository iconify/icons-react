import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl1cnobzu.css';
import '../../css/q/qgzh5-i-h.css';
import '../../css/o/ozav58bde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl1cnobzu"/><circle class="qgzh5-i-h"/><circle class="ozav58bde"/>`,
		"fallback": "thesvg-color:prequel",
	});
}

export default Component;
