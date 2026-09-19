import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmshqhb4s.css';
import '../../css/b/bcpzljbeb.css';
import '../../css/j/jn9mjsb2g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 pmshqhb4s"/><path class="bcpzljbeb clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 jn9mjsb2g"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:video-gallery-solid",
	});
}

export default Component;
