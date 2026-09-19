import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyp86db-i.css';
import '../../css/h/hrs2k7xqz.css';
import '../../css/v/v7ll8i85l.css';
import '../../css/a/a0xyf1bmv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyp86db-i"/><path class="hrs2k7xqz"/><path class="v7ll8i85l"/><path class="a0xyf1bmv"/>`,
		"fallback": "devicon:streamlit-wordmark",
	});
}

export default Component;
