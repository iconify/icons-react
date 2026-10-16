import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahflbbcgy.css';
import '../../css/t/twd90018l.css';
import '../../css/u/ut-54jgvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahflbbcgy"/><path class="twd90018l"/><path class="ut-54jgvw"/>`,
		"fallback": "energy-icons:speedometer-20",
	});
}

export default Component;
