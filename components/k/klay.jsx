import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9aih1b3i.css';
import '../../css/h/hdf9syabk.css';
import '../../css/c/cgzz9rn2k.css';
import '../../css/r/rmz1fob0f.css';
import '../../css/e/e5782b0zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9aih1b3i"/><path class="hdf9syabk"/><path class="cgzz9rn2k"/><path class="rmz1fob0f"/><path class="e5782b0zo"/>`,
		"fallback": "token:klay",
	});
}

export default Component;
