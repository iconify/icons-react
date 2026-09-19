import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yktsan6da.css';
import '../../css/i/ip1144q6u.css';
import '../../css/j/jf7ne5b_p.css';
import '../../css/j/jtfatk-pq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtYSFPcqM"><g class="s9cl3zbei"><rect class="yktsan6da"/><path class="ip1144q6u"/><path class="jf7ne5b_p"/><path class="jtfatk-pq"/></g></mask></defs><path mask="url(#SVGtYSFPcqM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:modify-two",
	});
}

export default Component;
