import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c42wbbbmv.css';
import '../../css/a/a9mdu8gjb.css';
import '../../css/u/upbnhsbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c42wbbbmv"/><path class="a9mdu8gjb"/><path clip-rule="evenodd" class="upbnhsbyv"/>`,
		"fallback": "stash:stopwatch-light",
	});
}

export default Component;
