import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfh38tbwa.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jld5q8bnb.css';
import '../../css/a/ajhqfpamm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vfh38tbwa"/><g class="md286fbip"><path class="jld5q8bnb"/><path class="ajhqfpamm"/></g></g>`,
		"fallback": "cryptocurrency-color:trtl",
	});
}

export default Component;
