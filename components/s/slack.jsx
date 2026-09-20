import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmhysybif.css';
import '../../css/s/sbtxsib7i.css';
import '../../css/e/erzbhu1-s.css';
import '../../css/b/bqg7jocgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmhysybif"/><path class="sbtxsib7i"/><path class="erzbhu1-s"/><path class="bqg7jocgd"/>`,
		"fallback": "uim:slack",
	});
}

export default Component;
