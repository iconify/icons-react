import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emdf2hbre.css';
import '../../css/o/o28scob-h.css';
import '../../css/d/dyiul4bgp.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emdf2hbre"/><path class="o28scob-h"/><path class="dyiul4bgp"/>`,
		"fallback": "formkit:usdc",
	});
}

export default Component;
