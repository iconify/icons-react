import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewbqj8b1z.css';
import '../../css/v/vp-n_ytkf.css';
import '../../css/j/jj-o6fpsq.css';
import '../../css/z/zic0h3bys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewbqj8b1z"/><path class="vp-n_ytkf"/><path class="jj-o6fpsq"/><path class="zic0h3bys"/>`,
		"fallback": "material-icon-theme:prettier",
	});
}

export default Component;
