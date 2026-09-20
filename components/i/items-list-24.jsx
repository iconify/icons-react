import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2clycb-g.css';
import '../../css/i/i4-2zbbbn.css';
import '../../css/w/wqtv-cc6s.css';
import '../../css/s/s-8xsdbgd.css';
import '../../css/h/hw0v58tik.css';
import '../../css/q/qkfen8dba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2clycb-g"/><path class="i4-2zbbbn"/><path clip-rule="evenodd" class="wqtv-cc6s"/><path class="s-8xsdbgd"/><path clip-rule="evenodd" class="hw0v58tik"/><path class="qkfen8dba"/>`,
		"fallback": "qlementine-icons:items-list-24",
	});
}

export default Component;
