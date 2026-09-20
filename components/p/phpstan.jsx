import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go9aaybid.css';
import '../../css/c/cjlnn9bwu.css';
import '../../css/j/jxcan4bkk.css';
import '../../css/v/vzg1iz6vp.css';
import '../../css/v/vh45_qint.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go9aaybid"/><path class="cjlnn9bwu"/><path class="jxcan4bkk"/><path class="vzg1iz6vp"/><path class="vh45_qint"/>`,
		"fallback": "material-icon-theme:phpstan",
	});
}

export default Component;
