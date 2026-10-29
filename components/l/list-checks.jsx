import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhozasbnq.css';
import '../../css/f/fxgfi4uqk.css';
import '../../css/w/wqjyc70ge.css';
import '../../css/j/jj02eab0l.css';
import '../../css/f/fwkbxq8ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xhozasbnq"/><path class="fxgfi4uqk wm-k"/><path class="wm-k wqjyc70ge"/><path class="jj02eab0l wm-a"/><path class="fwkbxq8ea wm-a"/>`,
		"fallback": "withicons-pastel:list-checks",
	});
}

export default Component;
