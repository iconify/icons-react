import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz-uhfsal.css';
import '../../css/h/hn2o_abjx.css';
import '../../css/w/wdbpibcck.css';

const viewBox = {"width":4.233,"height":4.233};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz-uhfsal"/><path class="hn2o_abjx"/><path class="wdbpibcck"/>`,
		"fallback": "material-icon-theme:simulink",
	});
}

export default Component;
