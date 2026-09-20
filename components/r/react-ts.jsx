import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgo2dqivu.css';
import '../../css/s/s4p2w4bkv.css';
import '../../css/r/rxz6rmbtd.css';
import '../../css/w/w181xqb3u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgo2dqivu"/><path class="s4p2w4bkv"/><path class="rxz6rmbtd"/><path class="w181xqb3u"/>`,
		"fallback": "material-icon-theme:react-ts",
	});
}

export default Component;
