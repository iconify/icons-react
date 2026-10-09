import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/z/zqb_age4a.css';
import '../../css/p/ppsnx1buw.css';
import '../../css/i/iox5mgb4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="zqb_age4a"/><path class="ppsnx1buw"/><path class="iox5mgb4p"/>`,
		"fallback": "energy-icons:mvhr-48",
	});
}

export default Component;
