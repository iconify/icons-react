import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-00eccfu.css';
import '../../css/i/i6o-cqbto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-00eccfu"/><path class="i6o-cqbto"/>`,
		"fallback": "octicon:tracked-by-closed-not-planned-16",
	});
}

export default Component;
